import { useEffect, useState } from "react";
import estilo from "./css/SheetCard.module.css";
import SubmitButton from "../form/SubmitButton";
import Title from "../Title";
import loading from "../../img/icon/loading.svg";
import { Link } from "react-router-dom";

function SheetCard() {
    const endPoint = `http://${window.location.hostname}`;
    const [sheets, setSheets] = useState([]);
    const [load, setLoad] = useState(true);
    function del(id) {
        const sheetsUpdated = sheets.filter((e) => e.id !== id);

        setSheets(sheetsUpdated);

        fetch(`${endPoint}:5000/sheets/${id}`, {
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
            fetch(`${endPoint}:5000/sheets`, {
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
                        <Link to={`/ficha/${sheet.id}`}>
                            <div className={estilo.sheetCard}>
                                <h2>{sheet.name}</h2>
                                <div className={estilo.contentCard}>
                                    <div>
                                        <span>Classe:</span>{" "}
                                        {!sheet.description &&
                                            "Classe não informada"}
                                        {sheet.class}
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
                        </Link>
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
            {!load && !sheets.length > 0 && <p>Sem fichas cadastradas</p>}
        </div>
    );
}

export default SheetCard;
