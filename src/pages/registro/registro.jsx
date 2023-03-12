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
         <h2 className={Style.titulo}>CARTELERA CARACAS</h2>
          <h2 className={Style.titulo2}>Crea tu cuenta aquí:</h2>
          <div className={Style.subt1}>
            <label>Nombre:</label>
            <input type="text" id="firstName" placeholder=' Ej: Pedro'/>
          </div>
          <div  className={Style.subt2}>
            <label>Apellido:</label>
            <input type="text" id="lastName" placeholder=' Ej: Carreño'/>
          </div>
          <div  className={Style.subt3}>
            <label>Email:</label>
            <input type="email" id="email" placeholder=' Ej: p.carreno@gmail.com'/>
          </div>

          <button className={Style.aceptar}>
            Registrarme
          </button>
          <button className={Style.google}>
            Registrarme con Google
          </button>

        </form>
      
      

    
   
    
    
    
    </div>
  )
}

export default Registro