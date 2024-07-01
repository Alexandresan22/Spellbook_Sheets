import estilo from "./css/SubmitButton.module.css";

function SubmitButton({ text, funcao }) {
    return (
        <div className={estilo.btnSubmit}>
            <button type="submit">{text}</button>
        </div>
    );
}

export default SubmitButton;
