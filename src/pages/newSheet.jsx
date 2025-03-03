import Footer from "../components/footer";
import { NavBar } from "../components/navBar";
import { TitlePages } from "../components/titlePages";
import estilo from "./css/newSheet.module.css";
import { useEffect, useState } from "react";
import Select from "../components/select.jsx";
import { db } from "../firebase-config.js";
import { collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";
import loadingImg from "../img/icon/loading.svg";
import { useNavigate } from "react-router-dom";
import Attributes from "../components/attributes.jsx";
import {
    verifyKeyAttributes,
    attributesValuesChange,
} from "../assets/spellbookSheets.jsx";

const NewSheet = () => {
    const [loadingState, setLoadingState] = useState(true);
    const [sheet, setSheet] = useState({
        attributes: {
            strenght: 0,
            dexterity: 0,
            inteligence: 0,
            vigor: 0,
            knowledge: 0,
            faith: 0,
            affinity: 0,
        },
    });

    const [charName, setCharName] = useState("");
    const [charHeight, setCharHeight] = useState("");
    const [charWeight, setCharWeight] = useState("");
    const [charAge, setCharAge] = useState("");
    const [charClass, setCharClass] = useState(null);
    const [charRace, setCharRace] = useState(null);
    const [charTendence, setCharTendence] = useState(null);
    const [charDescription, setCharDescription] = useState(null);
    const [dbCharClasses, setDbCharClasses] = useState([]);
    const [dbCharRaces, setDbCharRaces] = useState([]);
    const [dbCharTendences, setdbCharTendences] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const charClasses = collection(db, "charClasses");
    const charRaces = collection(db, "charRaces");
    const charTendences = collection(db, "charTendences");

    useEffect(() => {
        const getCharClasses = async () => {
            const dataClasses = await getDocs(charClasses);
            const dataRaces = await getDocs(charRaces);
            const dataTendences = await getDocs(charTendences);
            setdbCharTendences(
                dataTendences.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setDbCharClasses(
                dataClasses.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setDbCharRaces(
                dataRaces.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };

        getCharClasses();
    }, []);

    useEffect(() => {
        dbCharClasses.length > 0 && dbCharRaces.length > 0
            ? setLoadingState(false)
            : false;
    }, [dbCharClasses, dbCharRaces]);

    const submitSheet = (e) => {
        e.preventdefault;

        if (
            charClass != null &&
            Number(charAge) > 0 &&
            charRace != null &&
            charName.length > 0 &&
            Number(charHeight) > 0 &&
            Number(charWeight) > 0
        ) {
            setSheet({
                name: charName,
                height: Number(charHeight),
                weight: Number(charWeight),
                charClass: charClass,
                race: charRace,
                Tendence: charTendence,
                age: charAge,
                description: charDescription,
                inventory: {
                    balance: {
                        platinum: 0,
                        gold: 0,
                        silver: 0,
                        copper: 0,
                    },
                    itemsList: {},
                    itemsEquiped: {
                        hand: {
                            hand1: "",
                            hand2: "",
                        },
                        armor: {
                            helmet: "",
                            armor: "",
                            "shin-pads": "",
                            legs: "",
                        },
                        amulets: {
                            amulet1: "",
                            amulet2: "",
                        },
                    },
                },
                attributes: {
                    strenght: 0,
                    dexterity: 0,
                    inteligence: 0,
                    vigor: 0,
                    knowledge: 0,
                    faith: 0,
                    affinity: 0,
                },
                status: {
                    life: 0,
                    shield: 0,
                    mana: 0,
                    experience: 0,
                    level: 0,
                    BleedingAcc: 0,
                    PoisonAcc: 0,
                },
                bonuses: {},
            });
        } else {
            setErrorMessage(true);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorMessage(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [errorMessage]);

    useEffect(() => {
        if (sheet != null) {
            const nameDoc = `${charName}_${Date.now()}`;
            console.log(sheet);
            // const sheetsRef = doc(collection(db, "usersSheets", userUID, "sheets"), nameDoc.replace(/ /g, "_"));
            // setDoc(sheetsRef, sheet);
        }
    }, [sheet]);

    // ----
    // ----
    // ----
    // ----
    // ----
    // abaixo prossegue conteúdo para o segundo passo do cadastro da ficha do personagem
    // ----
    // ----
    // ----
    // ----
    // ----
    // ----

    const [balanceChar_Gold, setBalanceChar_Gold] = useState(0);

    const submitAttributes = (e) => {
        e.preventdefault;
    };

    return (
        <>
            <title>SpellBook Sheets | Criação de Personagem</title>
            <NavBar />

            <main className={estilo.newSheetContainer}>
                <TitlePages title="Criação de ficha de personagem" />

                {loadingState ? (
                    <img src={loadingImg} id={estilo.loadingImg} />
                ) : null}

                {sheet != null && !loadingState ? (
                    <form id={estilo.formAttributes} action={submitAttributes}>
                        <Attributes
                            attributes={sheet.attributes}
                            handleOnChange={(e) =>
                                attributesValuesChange(e, setSheet)
                            }
                            keyDown={verifyKeyAttributes}
                            readStatus={false}
                        />

                        <button id={estilo.buttonAttributes}>Concluir</button>
                    </form>
                ) : null}

                {sheet == null && !loadingState ? (
                    <form action={submitSheet}>
                        <input
                            name="charName"
                            id="charName"
                            className={estilo.newSheetInput}
                            placeholder="Nome do personagem"
                            value={charName}
                            onChange={(e) => {
                                setCharName(e.target.value);
                            }}
                        />

                        <input
                            name="charHeight"
                            id="charHeight"
                            className={estilo.newSheetInput}
                            type="number"
                            placeholder="Altura (cm)"
                            value={`${charHeight}`}
                            onChange={(e) => {
                                setCharHeight(e.target.value);
                            }}
                            step="0.01"
                        />

                        <input
                            name="charWeight"
                            id="charWeight"
                            className={estilo.newSheetInput}
                            type="number"
                            placeholder="Peso (Kg)"
                            value={charWeight}
                            onChange={(e) => {
                                setCharWeight(e.target.value);
                            }}
                            step="0.01"
                        />

                        <input
                            name="charAge"
                            id="charAge"
                            className={estilo.newSheetInput}
                            type="number"
                            placeholder="Idade"
                            value={charAge}
                            onChange={(e) => {
                                setCharAge(e.target.value);
                            }}
                        />

                        <Select
                            options={dbCharClasses}
                            name={"charClass"}
                            textOption="Classe"
                            handleOnChange={(e) => {
                                setCharClass(
                                    Number(e.target.value) >= 0
                                        ? dbCharClasses[`${e.target.value}`]
                                              .name
                                        : null
                                );
                            }}
                        />
                        <Select
                            options={dbCharRaces}
                            name={"charRace"}
                            textOption="Raça"
                            handleOnChange={(e) => {
                                setCharRace(
                                    Number(e.target.value) >= 0
                                        ? dbCharRaces[`${e.target.value}`].name
                                        : null
                                );
                            }}
                        />
                        <Select
                            options={dbCharTendences}
                            name={"charTendence"}
                            textOption="Têndencias"
                            handleOnChange={(e) => {
                                setCharTendence(
                                    Number(e.target.value) >= 0
                                        ? dbCharTendences[`${e.target.value}`]
                                              .name
                                        : null
                                );
                            }}
                        />

                        <textarea
                            id="charDescription"
                            placeholder="Descreva os detalhes do personagem"
                            name="charDescription"
                            onChange={(e) => setCharDescription(e.target.value)}
                        />

                        <button>Próximo</button>

                        {errorMessage ? (
                            <span className={estilo.warningMessage}>
                                Faltam dados a serem preenchidos
                            </span>
                        ) : null}
                    </form>
                ) : null}
            </main>

            <Footer />
        </>
    );
};

export default NewSheet;
