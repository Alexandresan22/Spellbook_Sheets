import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../components/navBar";
import estilo from "./css/home.module.css";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { Button } from "../components/button.jsx";
const Home = () => {
    let location = useLocation();

    // console.log(location.state);

    return (
        <>
            <title>SpellBook Sheets | Home</title>

            <NavBar />

            <div className={estilo.homeContent}>
                <div className={estilo.welcomeTitle}>
                    <h2 id={estilo.topTitle}>Boas Vindas ao</h2>
                    <h2>SpellBook Sheets</h2>
                </div>
                <div className={estilo.sheetsButton}>
                    <p>Acesse suas fichas abaixo!</p>
                    <Button name={<Link to="/">Fichas</Link>} />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
