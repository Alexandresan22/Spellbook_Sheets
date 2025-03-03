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
                </li>
            </ul>
        </>
    );
};

export default Attributes;
