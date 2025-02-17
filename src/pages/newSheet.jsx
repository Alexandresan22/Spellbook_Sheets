import Footer from "../components/footer";
import { NavBar } from "../components/navBar";
import { TitlePages } from "../components/titlePages";
import estilo from "./css/newSheet.module.css";
import {useState} from 'react'

const NewSheet = () => {

    const [charName, setCharName] = useState('');
    const [charHeight, setCharHeight] = useState('')
    const [charWeight, setCharWeight] = useState('');

    


    return (
        <>
            <title>SpellBook Sheets | Criação de Personagem</title>
            <NavBar />

            <main className={estilo.newSheetContainer}>
                <TitlePages title="Criação de ficha de personagem" />

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

                    <select id='1' onChange={(e)=> {
                        onChange(e.target.value)
                    }}>

                        <option key='1' value="1">Selecione uma Opção</option>
                        <option key='2' value="2">Guerreiro</option>


                    </select>

                </form>
            </main>

            <Footer />
        </>
    );
};

export default NewSheet;
