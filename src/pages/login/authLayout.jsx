import {Navigate, Outlet} from 'react-router-dom'
import { useState } from 'react'

    

const AuthLayout = ({user})=>{

    const [userState, setUserState] = useState(user ? user : false);
    console.log(user) 


     return userState ? <Navigate to='/'/> : <Outlet />

}

export default AuthLayout