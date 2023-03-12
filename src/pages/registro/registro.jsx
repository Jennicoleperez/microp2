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
      
        <form className={Style.formulario}>
          <h2 className={Style.titulo}>Crea tu cuenta aquí</h2>
          <div className={Style.subt1}>
            <label>Nombre:</label>
            <input type="text" id="firstName" />
          </div>
          <div  className={Style.subt2}>
            <label>Apellido:</label>
            <input type="text" id="lastName" />
          </div>
          <div  className={Style.subt3}>
            <label>Email:</label>
            <input type="email" id="email" />
          </div>

        </form>
      
      

    
   
    
    
    
    </div>
  )
}

export default Registro