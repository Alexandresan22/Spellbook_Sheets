import estilo from "./css/Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo/logo.png";
function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/fichas">Fichas</Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={Logo} width={128} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/novaficha">Nova Ficha</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
