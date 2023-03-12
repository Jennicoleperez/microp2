import React from 'react'
import collage1 from "../../image/collage1.jpg"
import Style from "../registro/registro.module.css"
import logo from '../../image/logo.svg'
import cartelera from '../../image/carteleracaracas.svg'
import { Link } from 'react-router-dom'

const LOGIN_URL="";

function Registro() {
  return (
    <div>
    
      <div className={Style.fondito1}>
        <img src={collage1} alt="Collage de películas" />
      </div>
      <div className={Style.cartelera}>
        <img src={cartelera} alt="Collage de películas" />
      </div>
      <div className={Style.logo}>
        <img src={logo} alt="Collage de películas" />
      </div>
      
      <Link to="/iniciarSesion" >
        <button className={Style.ingresar}>
          Iniciar Sesión
        </button>
      </Link>
      
      <div>
        <form className={Style.form}>
        <h1>¡Bienvenido!</h1>
        <br />
        <h2>Regístrate para continuar</h2>
        <br />

          <label >Nombre</label>
          <input type="text" id="fname" name="nombre" placeholder="Ej: Maria"/>

          <label >Apellido</label>
          <input type="text" id="lname" name="apellido" placeholder="Ej: Pérez"/>

          <label >Email</label>
          <input type="text" id="email" name="email" placeholder="Ej: mariaperez@gmail.com"/>

          <label>Contraseña</label>
          <input type="text" id="contrasena" name="contrasena" placeholder="*******"/>
          
          <Link to="/homePage" >
            <input type="submit" value="Entrar"/>
          </Link>

          <Link to="/homePage" >
            <input type="submit" value="Registrarse con Google"/>
          </Link>
          <br />
          <br />
          <h3>¿Tienes una cuenta? <Link to='/iniciarSesion'>Inicia Sesión.</Link></h3>

        </form>
      </div>
      
      

    
   
    
    
    
    </div>
  )
}

export default Registro