import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const AuthLayout = ({}) => {
    const [user, setUser] = useState(localStorage.getItem("userEmail"));
    const location = useLocation;

    return user ? (
        <Navigate to="/" state={{ key: "Autenticação já realizada" }} />
    ) : (
        <Outlet />
    );
};

export default AuthLayout;
