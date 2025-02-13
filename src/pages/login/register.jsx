import estilo from './css/login.module.css'
import logo from '../../img/Logo/logo.png'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () =>{
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')
    const [senhaChecked, setSenhaChecked] = useState(false)
    const setValueLoginEmail = (e)=>{

        setEmail(e.target.value)


    }

    const setValueLoginPassword = (e)=>{

        setSenha(e.target.value)


    }

    const checkPassword = (e)=>{

        setConfSenha(e.target.value)

        

    }

    const submit = (e)=>{
        console.log(e)

        e.preventDefault

        
    }

    useEffect(()=>{
        if(confSenha === senha) {
            const span = document.getElementById(`${estilo.checkSenha}`)
            setSenhaChecked(true)
            span.style.display = 'none'
        }else{
            const span = document.getElementById(`${estilo.checkSenha}`)
     
            span.style.display = 'block'
            setSenhaChecked(false)
        }
    }, [confSenha, confSenha > 0 ? senha : 'none'])


    return (
        
        
        <>

            <title>Spellbook Sheets | Acesso à conta</title>
            

            <div className={estilo.loginContainer}>

                <img src={logo}/>

                <form action={submit}>
                    <div>
                        <label>E-mail</label>
                        <input type="text" onChange={setValueLoginEmail} placeholder="Digite seu e-mail" value={email} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" onChange={setValueLoginPassword} placeholder='Digite sua senha' value={senha} />
                    </div>
                    <div>
                        <label>Confirmar Senha</label>
                        <input type="password" onChange={checkPassword} placeholder='Digite sua senha' value={confSenha} />
                    </div>
                        <span className={estilo.spanContent}>Esqueceu sua senha?</span>
                        <span id={estilo.checkSenha}>A senha está incorreta!</span>
                        <button>Registrar</button>

                        <span>já tem conta? <Link to='/login'className={estilo.spanContent}> Acesse aqui</Link></span>
                </form>

            </div>

        </>

    )
}

export default Register