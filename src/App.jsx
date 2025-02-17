import { useState } from "react";
import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
    useLocation,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import AuthLayout from "./pages/login/authLayout.jsx";
import Login from "./pages/login/login.jsx";
import "./main.css";
import Register from "./pages/login/register.jsx";
import ProtectedRoutes from "./assets/protectedRoutes.jsx";
import Error404 from "./pages/error404.jsx";
import About from "./pages/About.jsx";
import NewSheet from "./pages/newSheet.jsx";

function App() {
    const [user, setUser] = useState(localStorage.getItem("userEmail"));

    return (
        <>
            <Routes>
                <Route element={<ProtectedRoutes user={user ? user : false} />}>
                    <Route index element={<Home />} />
                    <Route path="novaficha" element={<NewSheet />} />
                </Route>

                <Route element={<AuthLayout user={user ? user : false} />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="sobre" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;
