import estilo from './css/login.module.css'
import logo from '../../img/Logo/logo.png'
import {useEffect, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../firebase-config'

const Register = () =>{
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')
    const [senhaChecked, setSenhaChecked] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate()

    const submit = (e, email)=>{
            e.preventDefault
            const emailContent = document.getElementById(`${estilo.checkEmail}`)
            

          if(validarEmail(email) && senhaChecked){
            emailContent.style.display = 'none'
            
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                    navigate('/login')
                // ...
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode)
                // ..
                });
          }else{
                emailContent.style.display = 'block'
          }
          
          
           

        
    }

    if (redirect) {
        return <Navigate to="/login" />;
    }

    useEffect(()=>{
        if(!confSenha || !senha){
            const span = document.getElementById(`${estilo.checkSenha}`)
            span.style.display = 'none'
        }else if(confSenha === senha) {
            const span = document.getElementById(`${estilo.checkSenha}`)
            setSenhaChecked(true)
            span.style.display = 'none'
        }else{
            const span = document.getElementById(`${estilo.checkSenha}`)
     
            span.style.display = 'block'
            setSenhaChecked(false)
        }
    }, [confSenha, senha])


    function validarEmail (email) {
        var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
         return emailPattern.test(email); 
      }

    return (
        
        
        <>

            <title>Spellbook Sheets | Acesso à conta</title>
            

            <div className={estilo.loginContainer}>

                <img src={logo}/>

                <form action={(e)=>{submit(e, email)}}>
                    <div>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' name='email' type="text" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Digite seu e-mail" value={email} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" onChange={(e)=>{setSenha(e.target.value)}} placeholder='Digite sua senha' value={senha} />
                    </div>
                    <div>
                        <label>Confirmar Senha</label>
                        <input type="password" onChange={(e)=>{ setConfSenha(e.target.value)}} placeholder='Digite sua senha' value={confSenha} />
                    </div>
                        <span className={estilo.spanContent}>Esqueceu sua senha?</span>
                        <span id={estilo.checkSenha}>A senha está incorreta!</span>
                        <span id={estilo.checkEmail}>O Email está digitado de forma incorreta, verifique novamente!</span>
                        <button>Registrar</button>

                        <span>já tem conta? <Link to='/login'className={estilo.spanContent}> Acesse aqui</Link></span>
                </form>

            </div>

        </>

    )
}

export default Register