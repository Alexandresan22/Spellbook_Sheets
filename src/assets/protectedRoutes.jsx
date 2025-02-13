import { useState } from 'react';
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutes = ({user})=>{

    const [userState, setUserState] = useState(user);
    console.log(user)
    
    return userState ? <Outlet/> : <Navigate to='/login'/>

}

export default ProtectedRoutes;