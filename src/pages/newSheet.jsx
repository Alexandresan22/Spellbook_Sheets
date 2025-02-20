import Footer from "../components/footer";
import { NavBar } from "../components/navBar";
import { TitlePages } from "../components/titlePages";
import estilo from "./css/newSheet.module.css";
import {useEffect, useState} from 'react'
import Select from '../components/select.jsx'
import { db } from "../firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
 import loadingImg from '../img/icon/loading.svg'

const NewSheet = () => {

    const [loadingState, setLoadingState] = useState(true)
    const [sheet, setSheet] = useState({})

    const [charName, setCharName] = useState('');
    const [charHeight, setCharHeight] = useState('')
    const [charWeight, setCharWeight] = useState('');
    const [charClass, setCharClass] = useState(null);
    const [charRace, setCharRace] = useState(null);
    const [charTendence, setCharTendence] = useState(null);
    const [charDescription, setCharDescription] = useState(null)
    const [dbCharClasses, setDbCharClasses] = useState([]);
    const [dbCharRaces, setDbCharRaces] = useState([]);
    const [dbCharTendences, setdbCharTendences] = useState([])
    const testOption = [{"id": 0, "name" : "Guerreiro" }, {"id" : 1, "name": "Ladino"}];

    const charClasses = collection(db, 'charClasses')
    const charRaces = collection(db, 'charRaces')
    const charTendences = collection(db, 'charTendences')

    // console.log([charClass, charRace, charTendence, charName, charHeight, charWeight])?

    useEffect(()=>{

        const getCharClasses = async ()=>{
            const dataClasses = await getDocs(charClasses);
            const dataRaces = await getDocs(charRaces);
            const dataTendences = await getDocs(charTendences);
            setdbCharTendences(dataTendences.docs.map((doc) =>({...doc.data(), id: doc.id})));
            setDbCharClasses(dataClasses.docs.map((doc) =>({...doc.data(), id: doc.id})));
            setDbCharRaces(dataRaces.docs.map((doc)=>({...doc.data(), id: doc.id})));
            
        }

        getCharClasses()

    }, [])


    const varSheet = {

        

    }





    useEffect(()=>{
       
        dbCharClasses && dbCharRaces ? setLoadingState(false) : false

    }, [dbCharClasses, dbCharRaces])



    const submitSheet = (e)=>{

            e.preventdefault

            if(charClass != null && charRace != null && charName.length > 0 && Number(charHeight) > 0 && Number(charWeight) > 0){
                setSheet( {
                    [charName] : {

            'name': charName,
            'height': Number(charHeight),
            'weight' :  Number(charWeight),
            'charClass' : charClass,
            'race' : charRace,
            'Tendence' : charTendence,
            'age': 0,
            'description' : charDescription,
            'inventory' : {
                'balance': {
                    'platinum' : 0,
                    'gold' : 0,
                    'silver' : 0,
                    'copper' : 0
                }
            }


        }
                })
            } else{
                console.log('Há algo não preenchido')
            }
            

        
    }

    useEffect((e)=>{

        console.log(sheet)

    }, [sheet])

    return (
        <>



            <title>SpellBook Sheets | Criação de Personagem</title>
            <NavBar />

            <main className={estilo.newSheetContainer}>
                <TitlePages title="Criação de ficha de personagem" />

                {loadingState ? <img id={estilo.loadingImg}src={loadingImg} /> : (                 
                    
                    <form action={submitSheet}>

                        <input 
                            name='charName'
                            id='charName'
                            className={estilo.newSheetInput} 
                            placeholder="Nome do personagem" 
                            value={charName} onChange={(e)=>{ setCharName(e.target.value)}} 
                        />

                        <input 
                            name='charHeight'
                            id='charHeight'
                            className={estilo.newSheetInput} 
                            type="number" placeholder="Altura" 
                            value={`${charHeight}`} onChange={(e)=>{ setCharHeight(e.target.value)}} 
                        />

                        <input 
                            name="charWeight"
                            id="charWeight"
                            className={estilo.newSheetInput}  
                            type='number' placeholder="Peso"
                            value={charWeight} 
                            onChange={(e)=>{ setCharWeight(e.target.value)}} 
                        />

                        <Select options={dbCharClasses} name={'charClass'} textOption='Classe' handleOnChange={(e)=>{ setCharClass(Number(e.target.value) >= 0 ? dbCharClasses[`${e.target.value}`].name : null)}}/>
                        <Select options={dbCharRaces} name={'charRace'} textOption='Raça' handleOnChange={(e)=>{ setCharRace(Number(e.target.value) >= 0 ? dbCharRaces[`${e.target.value}`].name : null)}}/>
                        <Select options={dbCharTendences} name={'charTendence'} textOption='Têndencias' handleOnChange={(e)=>{ setCharTendence(Number(e.target.value) >= 0 ? dbCharTendences[`${e.target.value}`].name : null)}}/>  
                        
                        <textarea id='charDescription' placeholder='Descreva os detalhes do personagem'name='charDescription' onChange={(e)=> setCharDescription(e.target.value)} />
                        
                        <button>Próximo</button>

                    </form> 
                
                )}

            </main>

            <Footer />

        
        </>
    

    );
};

export default NewSheet;
