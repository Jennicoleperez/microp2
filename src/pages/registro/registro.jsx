import React from 'react'
import collage1 from "../../image/collage1.jpg"
import Style from "../registro/registro.module.css"
import logo from '../../image/logo.svg'
import {Link} from 'react-router-dom';

const LOGIN_URL="";

function Registro() {
  return (
    <div>
    
      <div className={Style.fondito1}>
        <img src={collage1} alt="Collage de películas" />
      </div>
      <div className={Style.logo}>
        <img src={logo} alt="Collage de películas" />
      </div>
      
      <button className={Style.ingresar}>
        Iniciar Sesión
      </button>
      
      <div>
        <form className={Style.form}>

          <label >Nombre</label>
          <input type="text" id="fname" name="nombre" placeholder="Maria"/>

          <label >Apellido</label>
          <input type="text" id="lname" name="apellido" placeholder="Pérez"/>

          <label >Email</label>
          <input type="text" id="email" name="email" placeholder="Ej: mariaperez@gmail.com"/>

          <label>Contraseña</label>
          <input type="text" id="contrasena" name="contrasena" placeholder="*******"/>
        
          <input type="submit" value="Registrarse"/>
          <input type="submit" value="Registrarse con Google"/>

        </form>
      </div>
      
      

    
   
    
    
    
    </div>
  )
}

export default Registro