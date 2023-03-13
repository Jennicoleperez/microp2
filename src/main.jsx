import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import HomePage from "./pages/homePage/homePage";
import IniciarSesion from "./pages/iniciarSesion/iniciarSesion";
import Registro from "./pages/registro/registro";
import Estrenos from "./pages/estrenos/estrenos";
import DetallePelicula from "./pages/detallePelicula/detallePelicula";
import { Layout } from './Layout/Layout'
import { HOMEPAGE_URL, INICIARSESION_URL,ESTRENOS_URL, DETALLES_URL, } from "./constants/urls"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter> 
      <Routes>
        <Route element = {<Layout/>}>
          <Route path={HOMEPAGE_URL} element={<HomePage/>}/> 
          <Route path={INICIARSESION_URL} element={<IniciarSesion/>}/>
          <Route path="/*" element={<Registro/>}/> 
          <Route path={ESTRENOS_URL} element={<Estrenos/>}/>  
          <Route path={DETALLES_URL} element={<DetallePelicula/>}/>
          <Route path="/*" element={<h1>NOT FOUND!</h1>}/>
        </Route>  
      </Routes>  
    </BrowserRouter> 
  </React.StrictMode>   
  
);
