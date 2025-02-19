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


    const [charName, setCharName] = useState('');
    const [charHeight, setCharHeight] = useState('')
    const [charWeight, setCharWeight] = useState('');
    const [charClass, setCharClass] = useState('');
    const [dbCharClasses, setDbCharClasses] = useState();
    const testOption = [{"id": 0, "name" : "Guerreiro" }, {"id" : 1, "name": "Ladino"}];

    const charClasses = collection(db, 'charClasses')

    useEffect(()=>{

        const getCharClasses = async ()=>{
            const data = await getDocs(charClasses);
            setDbCharClasses(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
            console.log(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
        }

        getCharClasses()

    }, [])

    


    const handleClassChange = (e) => {

        setCharClass(e.target.value)

    }





    useEffect(()=>{

        dbCharClasses ? setLoadingState(false) : false

    }, [dbCharClasses])



    return (
        <>



            <title>SpellBook Sheets | Criação de Personagem</title>
            <NavBar />

            <main className={estilo.newSheetContainer}>
                <TitlePages title="Criação de ficha de personagem" />

                {loadingState ? <img src={loadingImg} /> : (                 
                    
                    <form>

                        <input 
                            className={estilo.newSheetInput} 
                            placeholder="Nome do personagem" 
                            value={charName} onChange={(e)=>{ setCharName(e.target.value)}} 
                        />

                        <input 

                            className={estilo.newSheetInput} 
                            type="number" placeholder="Altura" 
                            value={`${charHeight}`} onChange={(e)=>{ setCharHeight(e.target.value)}} 
                        />

                        <input 

                            className={estilo.newSheetInput}  
                            type='number' placeholder="Peso"
                            value={charWeight} 
                            onChange={(e)=>{ setCharWeight(e.target.value)}} 
                        />

                        <Select options={dbCharClasses ? dbCharClasses : null} textOption='Classe' handleOnChange={handleClassChange}/>
                        <Select options={testOption} textOption='Raça' handleOnChange={null}/>
                        <Select options={testOption} textOption='Têndencias' handleOnChange={null}/>  

                    </form> 
                
                )}

            </main>

            <Footer />

        
        </>
    

    );
};

export default NewSheet;
