import estilo from "./css/Container.module.css";

function Container(props) {
    return (
        <div className={`${estilo.container} ${estilo[props.customClass]}`}>
            {props.children}
        </div>
    );
}

export default Container;
