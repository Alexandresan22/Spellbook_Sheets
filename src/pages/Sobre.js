import Container from "../components/layouts/Container";
import estilo from "./css/Sobre.module.css";
import Title from "../components/Title";
function Sobre() {
    return (
        <Container newClass="start">
            <Title title="Sobre" />
            <p>
                Esse projeto tem como objetivo facilitar e automatizar o
                gerenciamento da ficha de personagens do{" "}
                <strong>RPG Mundo de Ovannam.</strong>
                Projeto criado e gerenciado por{" "}
                <strong>Alexandre Santos</strong>, estudante na área de
                engenharia de software, planeja se especializar em criação de
                jogos, mas atualmente estuda desenvolvimento de sites, iniciando
                com HTML, CSS & JavaScript.
            </p>
        </Container>
    );
}

export default Sobre;
