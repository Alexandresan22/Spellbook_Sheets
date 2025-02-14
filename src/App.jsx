import { useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Home from './pages/home.jsx'
import AuthLayout from './pages/login/authLayout.jsx'
import Login from './pages/login/login.jsx'
import './main.css'
import Register from './pages/login/register.jsx'
import ProtectedRoutes from './assets/protectedRoutes.jsx'
import Error404 from './pages/error404.jsx'

function App() {

        const [user, setUser] = useState(localStorage.getItem('userEmail'))
        console.log(localStorage.getItem('userName'))

  return (
    
      <>
      <BrowserRouter>
        <Routes>

              

              <Route  element={<ProtectedRoutes user={user ? user : false} />}>
              <Route path={'/'} element={<Home />}/>
              </Route>

              <Route  element={<AuthLayout user={user ? user : false}/>}>

                <Route  path='login' element={<Login />}/>
                <Route path='register' element={<Register />}/>

              </Route>

              <Route path='*' element={<Error404/>}/>

        </Routes>
      </BrowserRouter>
      </>
    
  )
}

export default App
