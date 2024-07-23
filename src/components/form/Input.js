import estilo from "./css/Input.module.css";

function Input({
    name,
    placeholder,
    value,
    type,
    text,
    handleOnChange,
    requireState,
    stepState,
    readState,
    customClass,
}) {
    return (
        <div className={`${estilo.form_input} ${estilo[customClass]}`}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                required={requireState}
                step={stepState}
                readOnly={readState}
            ></input>
        </div>
    );
}

export default Input;
