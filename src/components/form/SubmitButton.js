import estilo from "./css/SubmitButton.module.css";

function SubmitButton({ text, effect, type }) {
    return (
        <div className={estilo.btnSubmit}>
            <button type={type} onClick={effect}>
                {text}
            </button>
        </div>
    );
}

export default SubmitButton;
