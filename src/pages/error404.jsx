import { Link } from 'react-router-dom'
import '../main.css'

const Error404 = ()=>{

    return (
        <>
            <title>Página não encontrada - Erro 404</title>
            <p className='errorMessage'>Página não encontrada</p>
            <Link id="backError" to='/'>Voltar</Link>
        
        </>
    )

}

export default Error404