import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import HomePage from "./pages/homePage/HomePage";
import IniciarSesion from "./pages/iniciarSesion/IniciarSesion";
import Registro from "./pages/registro/Registro";
import Estrenos from "./pages/estrenos/Estrenos";
import DetallePelicula from "./pages/detallePelicula/DetallePelicula";
import PageNotFound from "./pages/pageNotFound/NotFound";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter> 
      <Routes>
        <Route path="/homePage" element={<HomePage/>}/> 
        <Route path="/iniciarSesion" element={<IniciarSesion/>}/>
        <Route path="/" element={<Registro/>}/> 
        <Route path="/estrenos" element={<Estrenos/>}/>  
        <Route path="/detallePelicula" element={<DetallePelicula/>}/>
        <Route path="/pageNotFound" element={<PageNotFound/>}/>  
      </Routes>  
    </BrowserRouter> 
  </React.StrictMode>   
  
);
