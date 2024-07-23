import { useParams } from "react-router-dom";
import Container from "../components/layouts/Container";
import { useEffect, useState } from "react";
import loading from "../img/icon/loading.svg";
import estilo from "./css/Ficha.module.css";
import personagem from "../img/Personagem/Personagem.jpg";
import Title from "../components/Title";
import Input from "../components/form/Input";
import Attributes from "../components/sheet/Attributes";
import ExperienceBoard from "../components/sheet/ExperienceBoard";
import { modCalc } from "../components/sheet/Attributes";
//Importações para o elemento Constitution

import lifeImg from "../img/icon/Ficha/gostar.png";
import manaImg from "../img/icon/Ficha/mana.png";

const Constitution = ({ attributes, lifeState, manaState, shieldState }) => {
    const mod = modCalc(attributes ? attributes : [0, 0, 0, 0, 0, 0, 0]); // [0] = força, [1] = destreza, assim por diante...
    const totalLife = 50 + mod[0] * 15;
    const totalMana = 25 + mod[5] * 7;
    const [life, setLife] = useState(lifeState);
    const [shield, setShield] = useState(shieldState);
    const [mana, setMana] = useState(manaState);
    const [changeLifeState, setChangeLifeState] = useState(false);

    let newLife = 0;
    let newShield = 0;

    useEffect(() => {
        if (life < 0) {
            setLife(0);
        } else if (life > totalLife) {
            setLife(totalLife);
        } else if (shield < 0) {
            setShield(0);
        } else if (mana > totalMana) {
            setMana(totalMana);
        } else if (mana < 0) {
            setMana(0);
        }
    }, [life, shield, mana, totalMana, totalLife]);

    const handleLifeChange = (e) => {
        if (e.target.id === estilo.inputLife) {
            newLife = Number(e.target.value);
            return newLife;
        } else {
            newShield = Number(e.target.value);
            return newShield;
        }
    };

    const reset = () => {
        setLife(totalLife);
        setMana(totalMana);
        setShield(0);
    };
    return (
        <div className={estilo.constitution}>
            <h2>Constituição</h2>
            <div className={estilo.life}>
                <button
                    onClick={() => {
                        if (changeLifeState === true) {
                            if (newLife < 0 && shield < Math.abs(newLife)) {
                                const lifeChanged = shield + newLife;

                                setShield(0);
                                setLife(life + lifeChanged);
                                setChangeLifeState(!changeLifeState);
                                return false;
                            } else if (newLife < 0 && shield > 0) {
                                setShield(newLife + newShield + shield);
                                setChangeLifeState(!changeLifeState);
                                return false;
                            }

                            setLife(Number(life + newLife));
                            setShield(Number(shield + newShield));
                        }

                        setChangeLifeState(!changeLifeState);
                    }}
                >
                    <img src={lifeImg} alt="vida" />
                </button>
                <div className={estilo.lifeBar}>
                    <p>
                        {life}/{totalLife} {shield > 0 && `+${shield}`}
                    </p>
                </div>
            </div>
            {changeLifeState && (
                <div className={estilo.lifeInputs}>
                    <span>Vida:</span>
                    <input
                        id={estilo.inputLife}
                        defaultValue={0}
                        onChange={handleLifeChange}
                        type="number"
                    />
                    <span>Escudo:</span>
                    <input
                        id={estilo.inputShield}
                        defaultValue={0}
                        onChange={handleLifeChange}
                        type="number"
                    />
                </div>
            )}

            <div className={estilo.mana}>
                <img src={manaImg} alt="vida" />

                <div className={estilo.manaBar}>
                    <p>
                        {mana}/{totalMana}
                    </p>
                </div>
            </div>
            <div className={estilo.reset}>
                <button onClick={reset}>Redefinir</button>
            </div>
        </div>
    );
};

// todos os compenentes acima são para complementar "Ficha"

// Elemento principal abaixo

function Ficha() {
    const endPoint = `http://${window.location.hostname}`;
    const { id } = useParams();
    const [sheet, setSheet] = useState();
    const [charLevel, setCharLevel] = useState();
    let [loadState, setLoadState] = useState(true);
    const [toUpdate, setToUpdate] = useState(false);
    const charUpdate = parseInt((137 * charLevel) / 1.8);
    const LastCharUpdate = parseInt((137 * charLevel - 1) / 2.2);
    const [knowledgeTotal, setKnowledgeTotal] = useState(0); //será responsável por monitorar o estado atual do valor total da experiência do jogador. knowledge Total significa "Conhecimento Total"
    const [attributeState, setAttributeState] = useState("disable");
    const [attributes, setAttributes] = useState();
    useEffect(() => {
        setTimeout(() => {
            fetch(`${endPoint}:5000/sheets/${id}`, {
                method: "GET",
                headers: {
                    ContentType: "Application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setSheet(data);
                    setLoadState(false);
                    setCharLevel(data.level);
                    setAttributes(data.attributes);
                    setKnowledgeTotal(data.experience);
                });
        }, 700);

        // eslint-disable-next-line
    }, []);

    function changeLevel(e) {
        if (e.key === "ArrowUp") {
            setCharLevel((prevLevel) => prevLevel + 1);
            setKnowledgeTotal(knowledgeTotal - charUpdate);
        } else if (e.key === "ArrowDown") {
            setCharLevel((prevLevel) => {
                const newLevel = prevLevel - 1;
                return newLevel >= 0 ? newLevel : prevLevel;
            });
            setKnowledgeTotal(knowledgeTotal + LastCharUpdate);
        }
    }

    const knowledgeUpdate = (e) => {
        const knowledge = Number(e.value);
        setKnowledgeTotal(knowledge);
    };

    useEffect(() => {
        if (knowledgeTotal >= charUpdate) {
            setToUpdate(true);
            setAttributeState("enable");
        } else {
            setToUpdate(false);
            setAttributeState("disable");
        }
        // eslint-disable-next-line
    }, [knowledgeTotal]);

    function changeAttributesValues(e) {
        let newValue = e.target.value;
        let attribute = e.target.alt;
        let attributing = { ...attributes };

        e.target.value = newValue;

        attributing[attribute] = Number(newValue);

        setAttributes(attributing);
    }

    return (
        <Container>
            <Title title="Ficha" />
            {!loadState && (
                <div className={estilo.sheet}>
                    <div className={estilo.sheetDivision}>
                        <div className={estilo.sheetHeader}>
                            <picture>
                                <img src={personagem} alt="playerPicture" />
                            </picture>
                            <div className={estilo.charDetails}>
                                <ul>
                                    <li key={`line_1_sheet_${id}`}>
                                        <Input
                                            text="Nome"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={sheet.name}
                                        />
                                        <Input
                                            text="Idade"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={`${
                                                sheet.age
                                                    ? sheet.age
                                                    : "Não informado"
                                            }`}
                                        />
                                        <Input
                                            text="Altura"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={`${
                                                sheet.height
                                                    ? parseFloat(
                                                          sheet.height
                                                      ).toFixed(2) / 100
                                                    : 0
                                            } m`}
                                        />
                                    </li>
                                    <li key={`line_2_sheet_${id}`}>
                                        <Input
                                            text="Peso"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={`${parseFloat(sheet.weight)
                                                .toFixed(2)
                                                .replace(".", ",")} kg`}
                                        />
                                        <Input
                                            text="Classe"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={sheet.class}
                                        />
                                        <Input
                                            text="Raça"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={sheet.race}
                                        />
                                        <Input
                                            text="Têndencia"
                                            readState={true}
                                            customClass="inputSheet"
                                            value={sheet.tendences}
                                        />
                                    </li>
                                    <li key={`line_3_sheet_${id}`}>
                                        <label>Descrição</label>
                                        <div className={estilo.biggerBox}>
                                            <p>
                                                {sheet.description
                                                    ? sheet.description
                                                    : "Sem descrição"}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={estilo.sheetBody}>
                        <ExperienceBoard
                            attKnowlegde={knowledgeUpdate}
                            charLevel={charLevel}
                            knowledgeTotal={knowledgeTotal}
                            toUpdate={charUpdate}
                        />
                        <div className={estilo.attributes}>
                            <h2>Atributos</h2>
                            <Attributes
                                sheet={sheet}
                                toEdit={attributeState}
                                action={changeLevel}
                                charLevel={charLevel}
                                readState={!toUpdate}
                                attribute={sheet.attributes}
                                knowledgeTotal={knowledgeTotal}
                                changeAttributesValues={changeAttributesValues}
                            />
                        </div>
                        <div className={estilo.constitutionBody}>
                            <Constitution
                                attributes={attributes}
                                lifeState={sheet.life}
                                manaState={sheet.mana}
                                shieldState={sheet.shield}
                            />
                        </div>
                    </div>
                </div>
            )}

            {loadState && (
                <div id={estilo.loading}>
                    <img alt="loading" src={loading}></img>
                </div>
            )}
        </Container>
    );
}

export default Ficha;
