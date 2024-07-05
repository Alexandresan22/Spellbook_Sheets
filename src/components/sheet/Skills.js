import estilo from "./css/Skills.module.css";

function Skills(props) {
    const expertises = {
        strength: { Atletismo: 0 },
        dexterity: { Acrobacia: 0, Furtividade: 0, Prestidigitação: 0 },
        intelligence: { Arcano: 0, Investigação: 0, Alquímia: 0 },
        faith: { Medicina: 0, Religião: 0, Natureza: 0 },
        knowledge: {
            Intuição: 0,
            Sobrevivência: 0,
            "Lidar com animais": 0,
            Percepção: 0,
        },
        affinity: { Intimidação: 0, Performance: 0, Blefar: 0 },
    };

    Object.keys(expertises).forEach((attribute) => {
        if (attribute === "strength") {
            Object.keys(expertises[attribute]).map((expertise) => {
                let value = props.mod[1];

                return (expertises[attribute][expertise] = value);
            });
        } else if (attribute === "dexterity") {
            Object.keys(expertises[attribute]).map((expertise) => {
                let value = props.mod[2];

                return (expertises[attribute][expertise] = value);
            });
        } else if (attribute === "intelligence") {
            Object.keys(expertises[attribute]).map((expertise) => {
                let value = props.mod[3];

                return (expertises[attribute][expertise] = value);
            });
        } else if (attribute === "faith") {
            Object.keys(expertises[attribute]).map((expertise) => {
                let value = props.mod[4];

                return (expertises[attribute][expertise] = value);
            });
        } else if (attribute === "knowledge") {
            Object.keys(expertises[attribute]).map((expertise) => {
                let value = props.mod[5];

                return (expertises[attribute][expertise] = value);
            });
        } else if (attribute === "affinity") {
            Object.keys(expertises[attribute]).map((expertise) => {
                let value = props.mod[6];

                return (expertises[attribute][expertise] = value);
            });
        }
    });

    const renderList = () => {
        const expertisesList = [];
        Object.keys(expertises).forEach((attribute) => {
            Object.keys(expertises[attribute]).forEach((skill) => {
                expertisesList.push(
                    <li key={`${attribute} ${skill}`}>
                        <span>{skill}</span>
                        <input value={expertises[attribute][skill]} readOnly />
                    </li>
                );
            });
        });
        return expertisesList;
    };

    return (
        <div
            className={`${estilo.expertisesContainer} ${
                estilo[props.customClass]
            }`}
        >
            <h2>Perícias</h2>
            <ul className={estilo.expertises}>{renderList()}</ul>
        </div>
    );
}

export default Skills;
