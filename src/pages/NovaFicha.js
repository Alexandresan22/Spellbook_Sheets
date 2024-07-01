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
    const [detailClass, setDetailClass] = useState();
    const [detailRace, setDetailRace] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/Charclasses", {
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
        fetch("http://localhost:5000/races", {
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
        fetch("http://localhost:5000/tendences", {
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

        if (
            char.target.name === "class" &&
            char.target.options[
                char.target.selectedIndex
            ].text.toUpperCase() !== "CLASSE"
        ) {
            const value = char.target.value;
            setDetailClass(classes[value]);
            console.log(detailClass);
        } else if (
            char.target.options[
                char.target.selectedIndex
            ].text.toUpperCase() === "CLASSE"
        ) {
            setDetailClass();
        }

        if (
            char.target.name.toUpperCase() === "RACE" &&
            char.target.options[
                char.target.selectedIndex
            ].text.toUpperCase() !== "RAÇA"
        ) {
            const value = char.target.value;

            setDetailRace(races[value]);
        } else if (
            char.target.options[
                char.target.selectedIndex
            ].text.toUpperCase() === "RAÇA"
        ) {
            setDetailRace();
        }
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

                <h3 className={estilo.minTitle}>Bônus do personagem</h3>
                <div className={estilo.analyzer}>
                    {detailClass && (
                        <div className={estilo.analyzerContent}>
                            <div className={estilo.analyz}>
                                <h3>Classe:</h3>
                                <p>{detailClass.name}</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Passiva:</h3>
                                <p>{detailClass.passive}</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Proficiência:</h3>
                                <ul>
                                    {detailClass.pericias.map((pericia) => (
                                        <li key={pericia.id}>
                                            <p>
                                                {Number(pericia.id) + 1}.{" "}
                                                {pericia.pericia}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={estilo.analyz}></div>
                        </div>
                    )}

                    {!detailClass && (
                        <div className={estilo.analyzerContent}>
                            <div className={estilo.analyz}>
                                <h3>Classe:</h3>
                                <p>Classe Selecionada</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Passiva:</h3>
                                <p>Passiva da Classe</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Proficiência:</h3>
                                <ul>
                                    <li>
                                        <p>Proficiência da classe</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={estilo.analyz}></div>
                        </div>
                    )}

                    {detailRace && (
                        <div className={estilo.analyzerContent}>
                            <div className={estilo.analyz}>
                                <h3>Raça:</h3>
                                <p>{detailRace.name}</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Talentos:</h3>
                                <ul>
                                    {detailRace.talents.map((talento) => (
                                        <li key={talento.id}>
                                            <p>
                                                {Number(talento.id) + 1}.{" "}
                                                {talento.talent}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Proficiência:</h3>
                                <ul>
                                    {detailRace.pericias.map((pericia) => (
                                        <li key={pericia.id}>
                                            <p>
                                                {Number(pericia.id) + 1}.{" "}
                                                {pericia.pericia}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={estilo.analyz}></div>
                        </div>
                    )}
                    {!detailRace && (
                        <div className={estilo.analyzerContent}>
                            <div className={estilo.analyz}>
                                <h3>Raça:</h3>
                                <p>Raça Selecionada</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Talentos:</h3>
                                <p>Talentos da Raça</p>
                            </div>
                            <div className={estilo.analyz}>
                                <h3>Proficiência:</h3>
                                <ul>
                                    <li>
                                        <p>Proficiência da Raça</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={estilo.analyz}></div>
                        </div>
                    )}
                </div>

                <SubmitButton text="Próximo" />
            </form>
        </Container>
    );
}

export default NovaFicha;
