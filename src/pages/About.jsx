import { TitlePages } from "../components/titlePages";
import estilo from "./css/about.module.css";
import { NavBar } from "../components/navBar";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <NavBar />

            <div className={estilo.aboutContainer}>
                <title>SpellBook Sheets | Sobre</title>

                <TitlePages title="Sobre" />

                <p>
                    Esse projeto tem como objetivo facilitar e automatizar o
                    gerenciamento da ficha de personagens do RPG Mundo de
                    Ovannam. Projeto criado e gerenciado por Alexandre Santos,
                    estudante na área de engenharia de software, planeja se
                    especializar em criação de jogos, mas atualmente estuda
                    desenvolvimento de sites, iniciando com HTML, CSS &
                    JavaScript.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default About;
