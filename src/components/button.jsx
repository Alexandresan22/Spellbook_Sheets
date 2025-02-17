import estilo from "./css/button.module.css";

export const Button = ({ name, action }) => {
    return (
        <button id={estilo.buttonComponent} onClick={action}>
            {name}
        </button>
    );
};
