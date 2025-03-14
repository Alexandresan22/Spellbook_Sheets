import { modCalc } from "../assets/spellbookSheets";
import estilo from "./css/attributes.module.css";

const Attributes = ({ attributes, handleOnChange, keyDown, readStatus }) => {
    return (
        <>
            <ul className={estilo.attributesContainer}>
                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="strenght"
                        id="strenght"
                        type="number"
                        defaultValue={attributes.strenght}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Força</label>
                    <p>{modCalc(attributes.strenght)}</p>
                </li>

                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="dexterity"
                        id="dexterity"
                        type="number"
                        defaultValue={attributes.dexterity}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Destreza</label>
                    <p>{modCalc(attributes.dexterity)}</p>
                </li>

                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="inteligence"
                        id="inteligence"
                        type="number"
                        max="100"
                        min="0"
                        defaultValue={attributes.inteligence}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Inteligência</label>
                    <p>{modCalc(attributes.inteligence)}</p>
                </li>

                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="vigor"
                        id="vigor"
                        type="number"
                        max="100"
                        min="0"
                        defaultValue={attributes.vigor}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Vigor</label>
                    <p>{modCalc(attributes.vigor)}</p>
                </li>

                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="knowledge"
                        id="knowledge"
                        type="number"
                        max="100"
                        min="0"
                        defaultValue={attributes.knowledge}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Conhecimento</label>
                    <p>{modCalc(attributes.knowledge)}</p>
                </li>

                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="affinity"
                        id="affinity"
                        type="number"
                        max="100"
                        min="0"
                        defaultValue={attributes.affinity}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Afinidade</label>
                    <p>{modCalc(attributes.affinity)}</p>
                </li>

                <li>
                    <input
                        className={estilo.inputAttributes}
                        name="faith"
                        id="faith"
                        type="number"
                        max="100"
                        min="0"
                        defaultValue={attributes.faith}
                        onKeyDown={keyDown}
                        onChange={handleOnChange}
                        readOnly={readStatus}
                    />
                    <label>Fé</label>
                    <p>{modCalc(attributes.faith)}</p>
                </li>
            </ul>
        </>
    );
};

export default Attributes;
