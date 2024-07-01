import estilo from "./css/Select.module.css";

function Select({ name, value, options, textOption, handleOnChange }) {
    return (
        <div className={estilo.form_select}>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleOnChange}
            >
                <option>{textOption}</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
