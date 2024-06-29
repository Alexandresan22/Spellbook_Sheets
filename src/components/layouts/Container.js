import estilo from "./css/Container.module.css";

function Container(props) {
    return <div className={estilo.container}>{props.children}</div>;
}

export default Container;
