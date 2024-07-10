import estilo from "./css/Attritutes.module.css";
import { useState, useEffect } from "react";
import Skills from "./Skills";
import SubmitButton from "../form/SubmitButton";
import { useNavigate } from "react-router-dom";

function Attributes({ sheet, preview }) {
    const [attributes, setAttributes] = useState(sheet.attributes);
    const [mod, setMod] = useState(modCalc);
    const history = useNavigate();
    const endPoint = window.location.protocol + "//" + window.location.hostname;
    function modCalc() {
        let modCopy = [0, 0, 0, 0, 0, 0, 0];

        modCopy[0] = parseInt((attributes.vitallity - 10) / 2);
        modCopy[1] = parseInt((attributes.strength - 10) / 2);
        modCopy[2] = parseInt((attributes.dexterity - 10) / 2);
        modCopy[3] = parseInt((attributes.inteligence - 10) / 2);
        modCopy[4] = parseInt((attributes.faith - 10) / 2);
        modCopy[5] = parseInt((attributes.knowledge - 10) / 2);
        modCopy[6] = parseInt((attributes.affinity - 10) / 2);

        return modCopy;
    }

    function changeAttributes(e) {
        let newValue = e.target.value;
        let attribute = e.target.alt;
        let attributing = { ...attributes };

        if (newValue <= 0) {
            newValue = "";
        }
        if (newValue > 100) {
            newValue = 100;
        }

        e.target.value = newValue;

        attributing[attribute] = Number(newValue);

        setAttributes(attributing);
    }
    /* eslint-disable */
    useEffect(() => {
        setMod(modCalc);
    }, [attributes]);

    const send = () => {
        sheet = { ...sheet, attributes };
        console.log(sheet);
        fetch(`${endPoint}:5000/sheets/${sheet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sheet),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                history("/fichas");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={estilo.containerAttributes}>
            <ul className={estilo.attributes}>
                <li key={0} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.vitallity}
                            accessKey={0}
                            alt="vitallity"
                        />
                    </div>
                    <p>Vigor</p>
                    <p>{mod[0]}</p>
                </li>
                <li key={1} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.strength}
                            accessKey={1}
                            alt="strength"
                        />
                    </div>
                    <p>Força</p>
                    <p>{mod[1]}</p>
                </li>
                <li key={2} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.dexterity}
                            accessKey={2}
                            alt="dexterity"
                        />
                    </div>
                    <p>Destreza</p>
                    <p>{mod[2]}</p>
                </li>
                <li key={3} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.inteligence}
                            accessKey={3}
                            alt="inteligence"
                        />
                    </div>
                    <p>Inteligência</p>
                    <p>{mod[3]}</p>
                </li>
            </ul>
            <ul className={`${estilo.attributes} ${estilo.attributesBottom}`}>
                <li key={4} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.faith}
                            accessKey={4}
                            alt="faith"
                        />
                    </div>
                    <p>Fé</p>
                    <p>{mod[4]}</p>
                </li>
                <li key={5} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.knowledge}
                            accessKey={5}
                            alt="knowledge"
                        />
                    </div>
                    <p>Conhecimento</p>
                    <p>{mod[5]}</p>
                </li>
                <li key={6} className={estilo.top}>
                    <div className={estilo.attributeBody}>
                        <input
                            type="number"
                            onChange={changeAttributes}
                            defaultValue={attributes.affinity}
                            accessKey={6}
                            alt="affinity"
                        />
                    </div>
                    <p>Afinidade</p>
                    <p>{mod[6]}</p>
                </li>
            </ul>

            {preview && (
                <div className={estilo.skillsContainer}>
                    <Skills mod={mod} />
                    <SubmitButton effect={send} text="Concluir" />
                </div>
            )}
        </div>
    );

    /* eslint-enable */
}

export default Attributes;
