import Container from "../components/layouts/Container";
import estilo from "./css/Home.module.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <Container customClass="home">
            <div className={estilo.wellcome}>
                <h1>
                    Seja Bem Vindo ao <span>SpellBook Sheets</span>
                </h1>
            </div>
            <div className={estilo.btn}>
                <span>Acesse suas fichas abaixo!</span>
                <Link to="/fichas">
                    <button>Fichas</button>
                </Link>
            </div>
        </Container>
    );
}

export default Home;
