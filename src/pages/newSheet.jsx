import Footer from "../components/footer";
import { NavBar } from "../components/navBar";
import { TitlePages } from "../components/titlePages";
import estilo from "./css/newSheet.module.css";

const NewSheet = () => {
    return (
        <>
            <title>SpellBook Sheets | Criação de Personagem</title>
            <NavBar />

            <main className={estilo.newSheetContainer}>
                <TitlePages title="Criação de ficha de personagem" />

                <form>
                    <input className={estilo.newSheetInput}></input>
                    <input className={estilo.newSheetInput}></input>
                    <input className={estilo.newSheetInput}></input>
                </form>
            </main>

            <Footer />
        </>
    );
};

export default NewSheet;
