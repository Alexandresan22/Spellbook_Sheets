import estilo from './css/select.module.css'

 const Select = ({name, value, options, textOption, handleOnChange })=>{


    return (
          <>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleOnChange}
                className={estilo.selectDefault}
            >
                <option>{textOption}</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </>
    )

}


export default Select;