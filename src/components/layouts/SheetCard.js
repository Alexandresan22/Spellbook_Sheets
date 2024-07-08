import { useEffect, useState } from "react";
import estilo from "./css/SheetCard.module.css";
import SubmitButton from "../form/SubmitButton";
import Title from "../Title";
import loading from "../../img/icon/loading.svg";

function SheetCard() {
    const [sheets, setSheets] = useState([]);
    const [load, setLoad] = useState(true);

    function del(id) {
        const sheetsUpdated = sheets.filter((e) => e.id !== id);

        setSheets(sheetsUpdated);

        fetch(`http://localhost:5000/sheets/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(sheets),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/sheets", {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setSheets(data);
                    setLoad(false);
                })
                .catch((err) => console.log(err));
        }, 800);
    }, []);

    return (
        <div className={estilo.containerSheetCard}>
            <Title title="Fichas" />
            {sheets &&
                sheets.map((sheet) => (
                    <div key={sheet.id} className={estilo.marginCard}>
                        <div className={estilo.sheetCard}>
                            <h2>{sheet.name}</h2>
                            <div className={estilo.contentCard}>
                                <div>
                                    <span>Classe:</span> <p>{sheet.class}</p>
                                </div>
                                <div>
                                    <span>Descrição:</span>{" "}
                                    <p>
                                        {!sheet.description &&
                                            "Descrição não informada"}
                                        {sheet.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <SubmitButton
                            customClass="minimally"
                            effect={() => del(sheet.id)}
                            text="Excluir"
                        />
                    </div>
                ))}
            {load > 0 && (
                <div id={estilo.loading}>
                    <img alt="loading" src={loading}></img>
                </div>
            )}

            {!load && sheets.length === 0 && <p>Sem fichas para mostrar...</p>}
        </div>
    );
}

export default SheetCard;
