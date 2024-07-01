import Container from "../components/layouts/Container";
import Input from "../components/form/Input";
import estilo from "./css/NovaFicha.module.css";
import Title from "../components/Title";
import Select from "../components/form/Select";
import SubmitButton from "../components/form/SubmitButton";

import { useState, useEffect } from "react";

function NovaFicha() {
    const submit = (e) => {
        e.preventDefault();
        console.log(sheet);
    };

    const [sheet, setSheet] = useState({});
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [tendences, setTendences] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/Charclasses", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/races", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setRaces(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/tendences", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTendences(data);
            })
            .catch((err) => console.log(err));
    }, []);

    function hancdleChanger(char) {
        setSheet({
            ...sheet,
            [char.target.name]:
                char.target.options[char.target.selectedIndex].text,
        });
    }

    function handleChange(e) {
        setSheet({ ...sheet, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Title title="Criação de personagem" />
            <form className={estilo.form} onSubmit={submit}>
                <div className={estilo.line}>
                    <Input
                        name="nome"
                        placeholder="Nome do Personagem"
                        handleOnChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="peso"
                        placeholder="Peso (Kg)"
                        handleOnChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="height"
                        placeholder="Altura (cm)"
                        handleOnChange={handleChange}
                    />
                </div>
                <div className={estilo.line}>
                    <Select
                        name="class"
                        textOption="Classe"
                        options={classes}
                        handleOnChange={hancdleChanger}
                    />
                    <Select
                        name="race"
                        textOption="Raça"
                        options={races}
                        handleOnChange={hancdleChanger}
                    />
                    <Select
                        name="tendences"
                        textOption="Têndencia"
                        options={tendences}
                        handleOnChange={hancdleChanger}
                    />
                </div>
                <div className={estilo.biggerBox}>
                    <textarea
                        name="description"
                        placeholder="Descrição breve"
                        className={estilo.textarea}
                        onChange={handleChange}
                    />
                </div>
                <SubmitButton text="Próximo" />
            </form>
        </Container>
    );
}

export default NovaFicha;
