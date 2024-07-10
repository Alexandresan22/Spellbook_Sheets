import estilo from "./css/Footer.module.css";
import facebook from "../../img/icon/Midias Socias/facebook.png";
import linkedin from "../../img/icon/Midias Socias/linkedin.png";
import instagram from "../../img/icon/Midias Socias/instagram.png";
import github from "../../img/icon/Midias Socias/github.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Link
                        target="_blank"
                        to="https://www.facebook.com/Alexandre.San22"
                    >
                        <img alt="facebook" src={facebook} />
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        to="https://www.instagram.com/alexandre_santos072/"
                    >
                        <img alt="instagram" src={instagram} />
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/alexandre-santos-843820205/"
                    >
                        <img alt="linkedin" src={linkedin} />
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        to="https://github.com/Alexandresan22"
                    >
                        <img alt="github" src={github} />
                    </Link>
                </li>
            </ul>
            <span>Alexandre Santos © 2024</span>
        </footer>
    );
}

export default Footer;
