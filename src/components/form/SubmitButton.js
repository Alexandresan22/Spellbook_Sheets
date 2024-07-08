import estilo from "./css/SubmitButton.module.css";

function SubmitButton({ text, effect, type, customClass }) {
    return (
        <div className={`${estilo.btnSubmit} ${estilo[customClass]}`}>
            <button type={type} onClick={effect}>
                {text}
            </button>
        </div>
    );
}

export default SubmitButton;
