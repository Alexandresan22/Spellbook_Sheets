import estilo from "./css/login.module.css";
import logo from "../../img/Logo/logo.png";
import { useEffect, useState } from "react";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import loadingImg from "../../img/icon/loading.svg";
import { reload, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault;
        setLoading(true);

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("userPhoneNumber", user.phoneNumber);
                localStorage.setItem("userName", user.displayName);
                localStorage.setItem("userUID", user.uid);
                navigate("/", { state: { key: "Logado com sucesso!" } });

                // ...
            })
            .catch((error) => {
                if (error.code == "auth/invalid-email") {
                    setMessage("Dados digitados inválidos");
                } else if (error.code == "auth/missing-password") {
                    setMessage("Senha não informada!");
                } else if (error.code == "auth/invalid-credential") {
                    setMessage("Verifique a senha e e-mail digitados!");
                }

                setLoading(false);
            });
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <>
            <title>Spellbook Sheets | Acesso à conta</title>

            <div className={estilo.loginContainer}>
                <img src={logo} />

                <form action={signIn}>
                    <h3>Login</h3>
                    {message ? (
                        <p id={estilo.messageWarning}>{message}</p>
                    ) : (
                        false
                    )}

                    <div>
                        <label>E-mail</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Digite seu e-mail"
                            value={email}
                        />
                    </div>
                    <div id={estilo.passwordInput}>
                        <label>Senha</label>
                        <input
                            type="password"
                            onChange={(e) => {
                                setSenha(e.target.value);
                            }}
                            placeholder="Digite sua senha"
                            value={senha}
                        />
                    </div>
                    <span className={estilo.spanContent}>
                        Esqueceu sua senha?
                    </span>

                    <button>Entrar</button>

                    <span>
                        Não tem conta?{" "}
                        <Link to="/register" className={estilo.spanContent}>
                            {" "}
                            Acesse aqui!{" "}
                        </Link>
                    </span>

                    {loading ? (
                        <img id={estilo.loadingImg} src={loadingImg} />
                    ) : (
                        false
                    )}
                </form>
            </div>
        </>
    );
};

export default Login;
