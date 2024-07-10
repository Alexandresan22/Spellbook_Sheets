import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import NovaFicha from "./pages/NovaFicha";
import Fichas from "./pages/Fichas";
import estilo from "./css/App.module.css";
import Footer from "./components/layouts/Footer";

function App() {
    return (
        <Router>
            <Header />
            <main className={estilo.App}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/novaficha" element={<NovaFicha />} />
                    <Route path="/fichas" element={<Fichas />} />
                    <Route path="/ficha/:id" />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
