import estilo from './css/login.module.css'
import logo from '../../img/Logo/logo.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'
const Login = () =>{
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const setValueLoginEmail = (e)=>{

        setEmail(e.target.value)


    }

    const setValueLoginPassword = (e)=>{

        setSenha(e.target.value)


    }

    return (
        
        
        <>

            <title>Spellbook Sheets | Acesso à conta</title>
            

            <div className={estilo.loginContainer}>

                <img src={logo}/>

                <form>
                    <div>
                        <label>E-mail</label>
                        <input type="text" onChange={setValueLoginEmail} placeholder="Digite seu e-mail" value={email} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" onChange={setValueLoginPassword} placeholder='Digite sua senha' value={senha} />
                    </div>
                        <span className={estilo.spanContent}>Esqueceu sua senha?</span>

                        <button>Entrar</button>

                        <span>Não tem conta? <Link to='/register'className={estilo.spanContent}> Acesse aqui! </Link></span>
                </form>

            </div>

        </>

    )
}

export default Login