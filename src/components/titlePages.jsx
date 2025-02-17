import estilo from "./css/titlePages.module.css";

export const TitlePages = ({ title }) => {
    return <h2 className={estilo.titlePages}>{title}</h2>;
};
