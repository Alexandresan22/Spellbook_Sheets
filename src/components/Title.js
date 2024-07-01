import estilo from "./css/Title.module.css";

function Title({ title }) {
    return (
        <>
            <h1 className={estilo.title}>{title}</h1>
        </>
    );
}

export default Title;
