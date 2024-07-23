import estilo from "./css/ExperienceBoard.module.css";
// eslint-disable-next-line
import { useState, useEffect } from "react";
function ExperienceBoard({
    attKnowlegde,
    charLevel,
    knowledgeTotal,
    toUpdate,
}) {
    const [knowledge, setKnowledge] = useState(knowledgeTotal);

    const toUpKnowledgeTotal = (e) => {
        const experience = document.querySelector(`#${estilo.exp}`);
        const newKnowledge = Number(knowledge + Number(experience.value));

        setKnowledge(newKnowledge);
        experience.value = 0;
    };

    useEffect(() => {
        const knowledgeBar = document.querySelector(`#${estilo.knowledge}`);

        attKnowlegde(knowledgeBar);
    }, [knowledge]);

    useEffect(() => {
        setKnowledge(knowledgeTotal);
    }, [knowledgeTotal]);

    return (
        <div className={estilo.experienceBoard}>
            <div className={estilo.knowledgeBoardMargin}>
                <div className={estilo.knowledgeBoard}>
                    <div className={estilo.knowledge}>
                        <span>Conhecimento:</span>
                        <div>
                            <input
                                id={estilo.knowledge}
                                readOnly
                                type="number"
                                onChange={attKnowlegde}
                                value={knowledge}
                            />
                        </div>
                    </div>

                    <div className={estilo.expApplicator}>
                        <input id={estilo.exp} type="number" defaultValue={0} />
                        <button onClick={toUpKnowledgeTotal}>+</button>
                    </div>
                    <div className={estilo.characterLevelBoard}>
                        <p>
                            <span>Nível:</span> {charLevel}{" "}
                        </p>
                    </div>
                </div>

                <p id={estilo.toUpdate}>
                    <span>Conhecimento necessário:</span>
                    {toUpdate}
                </p>
            </div>
        </div>
    );
}

export default ExperienceBoard;
