import React from 'react'
import Style from './iniciarSesion.module.css'

function IniciarSesion() {
  return (
    <div className="">
      <div>IniciarSesion</div>
      <div>
        <form className={Style.form}>
          <label>Email</label>
          <input type="text" id="email" name="email" placeholder="mariaperez@gmail.com"/>

          <label >Contraseña</label>
          <input type="text" id="contraseña" name="contrasena" placeholder="********"/>
        
          <input type="submit" value="Ingresar"/>
        </form>
      </div>

    </div>
    
  )
}

export default IniciarSesion