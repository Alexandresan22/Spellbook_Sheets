import {Outlet} from 'react-router-dom'

const AuthLayout = ()=>{

return(
    <>

        <div>
            <p>Layout do login e registro
            </p>
            <Outlet />
        </div>

    </>
)

}

export default AuthLayout