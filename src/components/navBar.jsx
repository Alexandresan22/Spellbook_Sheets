import { NavLink } from "react-router-dom";
import img from "../img/Logo/logo.png";
import estilo from "./css/navbar.module.css";
export const NavBar = () => {
    return (
        <nav>
            <ul className={estilo.navContent}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Fichas</NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={img} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/novaficha">Nova Ficha</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    );
};
