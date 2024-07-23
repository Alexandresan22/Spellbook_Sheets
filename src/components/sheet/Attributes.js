import estilo from "./css/Attritutes.module.css";
import { useState, useEffect } from "react";
import Skills from "./Skills";
import SubmitButton from "../form/SubmitButton";
import { useNavigate } from "react-router-dom";

export const modCalc = (attributes) => {
    let modCopy = [0, 0, 0, 0, 0, 0, 0];

    modCopy[0] = parseInt((attributes.vitallity - 10) / 2);
    modCopy[1] = parseInt((attributes.strength - 10) / 2);
    modCopy[2] = parseInt((attributes.dexterity - 10) / 2);
    modCopy[3] = parseInt((attributes.inteligence - 10) / 2);
    modCopy[4] = parseInt((attributes.faith - 10) / 2);
    modCopy[5] = parseInt((attributes.knowledge - 10) / 2);
    modCopy[6] = parseInt((attributes.affinity - 10) / 2);

    return modCopy;
};

function Attributes({
    knowledgeTotal,
    sheet,
    preview,
    readState,
    toEdit,
    action,
    charLevel,
    changeAttributesValues,
}) {
    const [attributes, setAttributes] = useState(sheet.attributes);
    const [mod, setMod] = useState([0, 0, 0, 0, 0, 0, 0]);
    const history = useNavigate();
    // eslint-disable-next-line
    const endPoint = "http:" + "//" + window.location.hostname;

    function keyDown(e) {
        const value = Number(e.target.value);

        if (e.key === "ArrowUp" && value + 1 > 100) {
            e.preventDefault();
            return false;
        }
        if (e.key === "ArrowDown" && value - 1 < 0) {
            e.preventDefault();
            return false;
        } else if (e.key !== "ArrowDown" && e.key !== "ArrowUp") {
            e.preventDefault();
            return false;
        }

        if (action && !readState) {
            action(e);
        }
    }

    function changeAttributes(e) {
        let newValue = e.target.value;
        let attribute = e.target.alt;
        let attributing = { ...attributes };

        e.target.value = newValue;

        attributing[attribute] = Number(newValue);

        setAttributes(attributing);

        if (changeAttributesValues) {
            changeAttributesValues(e);
        }
    }

    /* eslint-disable */

    useEffect(() => {
        if (sheet !== undefined && sheet.id !== undefined) {
            setMod(modCalc(attributes));

            const sheetiring = {
                attributes,
                level: charLevel,
                experience: knowledgeTotal,
            };

            fetch(`${endPoint}:5000/sheets/${sheet.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sheetiring),
            })
                .then((resp) => resp.json())
                .then((data) => {})
                .catch((err) => console.log(err));
        }
    }, [attributes]);

    useEffect(() => {
        if (sheet !== undefined && sheet.id !== undefined) {
            setMod(modCalc(attributes));

            const sheetiring = {
                experience: knowledgeTotal,
            };

            fetch(`${endPoint}:5000/sheets/${sheet.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sheetiring),
            })
                .then((resp) => resp.json())
                .then((data) => {})
                .catch((err) => console.log(err));
        }
    }, [knowledgeTotal]);

    return (
        <div className={estilo.containerAttributes}>
            {sheet !== undefined && (
                <>
                    <ul className={estilo.attributes}>
                        <li key={0} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.vitallity}
                                    accessKey={0}
                                    alt="vitallity"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Vigor</p>
                            <p>{mod[0]}</p>
                        </li>
                        <li key={1} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.strength}
                                    accessKey={1}
                                    alt="strength"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Força</p>
                            <p>{mod[1]}</p>
                        </li>
                        <li key={2} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.dexterity}
                                    accessKey={2}
                                    alt="dexterity"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Destreza</p>
                            <p>{mod[2]}</p>
                        </li>
                        <li key={3} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.inteligence}
                                    accessKey={3}
                                    alt="inteligence"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Inteligência</p>
                            <p>{mod[3]}</p>
                        </li>
                    </ul>
                    <ul
                        className={`${estilo.attributes} ${estilo.attributesBottom}`}
                    >
                        <li key={4} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.faith}
                                    accessKey={4}
                                    alt="faith"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Fé</p>
                            <p>{mod[4]}</p>
                        </li>
                        <li key={5} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.knowledge}
                                    accessKey={5}
                                    alt="knowledge"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Conhecimento</p>
                            <p>{mod[5]}</p>
                        </li>
                        <li key={6} className={estilo.top}>
                            <div
                                className={`${estilo.attributeBody} ${
                                    estilo[`${toEdit}`]
                                }`}
                            >
                                <input
                                    type="number"
                                    onChange={changeAttributes}
                                    onKeyDown={keyDown}
                                    defaultValue={attributes.affinity}
                                    accessKey={6}
                                    alt="affinity"
                                    readOnly={readState}
                                />
                            </div>
                            <p>Afinidade</p>
                            <p>{mod[6]}</p>
                        </li>
                    </ul>
                </>
            )}

            {preview && (
                <div className={estilo.skillsContainer}>
                    <Skills mod={mod} />
                    <SubmitButton
                        effect={() => {
                            history("/fichas");
                        }}
                        text="Concluir"
                    />
                </div>
            )}
        </div>
    );

    /* eslint-enable */
}

export default Attributes;
