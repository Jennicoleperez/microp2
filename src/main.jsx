import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
<<<<<<< HEAD
import HomePage from "./pages/homePage/homePage";
import IniciarSesion from "./pages/iniciarSesion/iniciarSesion";
import Registro from "./pages/registro/registro";
import Estrenos from "./pages/estrenos/estrenos";
import DetallePelicula from "./pages/detallePelicula/detallePelicula";
import PageNotFound from "./pages/pageNotFound/notFound";
=======
import HomePage from "./pages/homePage/HomePage";
import IniciarSesion from "./pages/iniciarSesion/IniciarSesion";
import Registro from "./pages/registro/Registro";
import Estrenos from "./pages/estrenos/Estrenos";
import DetallePelicula from "./pages/detallePelicula/DetallePelicula";
import PageNotFound from "./pages/pageNotFound/NotFound";
import Buscador from './pages/buscadorPage/buscador'

>>>>>>> Gabriel

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter> 
      <Routes>
        <Route path="/homePage" element={<HomePage/>}/> 
        <Route path="/iniciarSesion" element={<IniciarSesion/>}/>
        <Route path="/" element={<Registro/>}/> 
        <Route path="/estrenos" element={<Estrenos/>}/>  
        <Route path="/detallePelicula" element={<DetallePelicula/>}/>
<<<<<<< HEAD
        <Route path="/*" element={<h1>NOT FOUND!</h1>}/>  
=======
        <Route path="/pageNotFound" element={<PageNotFound/>}/>
        <Route path="/buscar" element={<Buscador/>}/>
>>>>>>> Gabriel
      </Routes>  
    </BrowserRouter> 
  </React.StrictMode>   
  
);
