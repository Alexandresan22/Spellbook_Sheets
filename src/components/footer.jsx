import estilo from "./css/footer.module.css";
import facebook from "../img/icon/Midias Sociais/facebook.png";
import github from "../img/icon/Midias Sociais/github.png";
import instagram from "../img/icon/Midias Sociais/instagram.png";
import linkedin from "../img/icon/Midias Sociais/linkedin.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className={estilo.footIcons}>
                <ul>
                    <li>
                        <Link
                            target="_blank"
                            to="https://github.com/Alexandresan22"
                        >
                            <img src={github} alt="githubIcon" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            to="https://www.instagram.com/alexandre_santos072/ "
                        >
                            <img src={instagram} alt="instagramIcon" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://www.linkedin.com/in/alexandre-santos-843820205/"
                            target="_blank"
                        >
                            <img src={linkedin} alt="linkedinIcon" />
                        </Link>
                    </li>
                </ul>
            </div>
            <p>Alexandre Santos {"\u00a9"} 2025</p>
        </footer>
    );
};

export default Footer;
