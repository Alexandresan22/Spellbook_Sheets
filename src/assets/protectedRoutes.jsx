import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";
const ProtectedRoutes = ({}) => {
    const [user, setUser] = useState(localStorage.getItem("userEmail"));
    const location = useLocation();
    const [message, setMessage] = useState(
        location.state ? location.state.key : false
    );

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(""); // Define como vazio após 4 segundos
            }, 4000);

            return () => clearTimeout(timer); // Limpa o timer se a variável mudar antes de completar o tempo
        }
    }, [message]);

    return (
        <>
            {message ? <span id="messagesWarning">{message}</span> : false}

            {user ? (
                <Outlet />
            ) : (
                <Navigate
                    to="/login"
                    state={{ key: "Você precisar autenticar-se" }}
                />
            )}
        </>
    );
};

export default ProtectedRoutes;
