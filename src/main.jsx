import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Home from './pages/home.jsx'
import AuthLayout from './pages/login/authLayout.jsx'
import Login from './pages/login/login.jsx'
import './main.css'
import { useEffect } from 'react'
import ProtectedRoutes from './assets/protectedRoutes.jsx'
const user = false;



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          


            <Route element={< ProtectedRoutes/>}>

              <Route index element={<App />} />
              <Route path='home' element={<Home/>} />
            
            </Route>
            
          <Route element={<AuthLayout />} >
            <Route path='login' element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>
)
