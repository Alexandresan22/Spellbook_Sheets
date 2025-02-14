import estilo from './css/login.module.css'
import logo from '../../img/Logo/logo.png'
import {useState} from 'react'
import { Link, Navigate, replace, useNavigate } from 'react-router-dom'

import { reload, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';

const Login = () =>{
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const signIn = (e)=>{

        e.preventDefault

        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          localStorage.setItem("userEmail", user.email);
          localStorage.setItem("userPhoneNumber", user.phoneNumber);
          localStorage.setItem("userName", user.displayName);
          localStorage.setItem("userUID", user.uid);
          window.location.reload()
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    }


    

    return (
        
        
        <>

            <title>Spellbook Sheets | Acesso à conta</title>
            

            <div className={estilo.loginContainer}>

                <img src={logo}/>

                <form action={signIn}>
                    <div>
                        <label>E-mail</label>
                        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Digite seu e-mail" value={email} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" onChange={(e)=>{setSenha(e.target.value)}} placeholder='Digite sua senha' value={senha} />
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