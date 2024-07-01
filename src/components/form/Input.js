import estilo from "./css/Input.module.css";

function Input({ name, placeholder, value, type, text, handleOnChange }) {
    return (
        <div className={`${estilo.form_input}`}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            ></input>
        </div>
    );
}

export default Input;
