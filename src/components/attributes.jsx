import estilo from './css/attributes.module.css'
import {useState} from 'react'


const Attributes = (attributes) => {

    console.log(attributes.attributes)

    const [value, setValue] = useState(0)
       

    return (

        <>
        
            
            <input 
                className={estilo.inputAttributes}
                name='charName'
                id='charName'
                type='number'
                max='100'
                min='0'
                value={value}
                onChange={ (e)=>{

                    if (Number(e.target.value) - 1 < 0) {

                        setValue(0)
                        return false
                    }else if (Number(e.target.value) + 1 > 100){
                        setValue(100)
                        return false
                    }

                    setValue(e.target.value)

                    

                }}
            />
        

        </>

    )



}

export default Attributes;