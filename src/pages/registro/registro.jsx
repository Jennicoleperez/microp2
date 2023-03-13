import React from 'react'
import collage1 from "../../image/collage1.jpg"
import Style from "../registro/registro.module.css"
import logo from '../../image/logo.svg'
import cartelera from '../../image/carteleracaracas.svg'
import { Link } from 'react-router-dom'
import { HOMEPAGE_URL, INICIARSESION_URL} from '../../constants/urls'
import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service'
import { useState } from 'react'

const LOGIN_URL="";

function Registro() {

  const [] = useState({
    name: "",
    lname: "",
    email: "",
    contrasena:""
  });

  const handleSignWithGoogle= async () => {
    await signInWithGoogle();
  } 

  const handleOnChange = (event)  => {
    const{name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await registerWithEmailAndPassword(formData.email, formData.contrasena);
  }

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
      
      <Link to={INICIARSESION_URL} >
        <button className={Style.ingresar}>
          Iniciar Sesión
        </button>
      </Link>
      
      <div>
        <form className={Style.form} onSubmit={onSubmit}>
        <h1>¡Bienvenido!</h1>
        <br />
        <h2>Regístrate para continuar</h2>
        <br />

          <label  >Nombre</label>
          <input type="text" id="fname" name="name" placeholder="Ej: Maria" onChange={handleOnChange}/>

          <label >Apellido</label>
          <input type="text" id="lname" name="lname" placeholder="Ej: Pérez" onChange={handleOnChange}/>

          <label >Email</label>
          <input type="text" id="email" name="email" placeholder="Ej: mariaperez@gmail.com"  onChange={handleOnChange}/>

          <label >Contraseña</label>
          <input type="text" id="contrasena" name="contrasena" placeholder="*******" onChange={handleOnChange}/>
          
          <Link to={HOMEPAGE_URL} >
            <button type="submit">Entrar</button>
          </Link>

          <button type="submit" onClick={handleSignWithGoogle}>Registrarse con Google</button>
          
          
          <br />
          <br />
          <h3>¿Tienes una cuenta? <Link to={INICIARSESION_URL}>Inicia Sesión.</Link></h3>

        </form>
      </div>
      
      

    
   
    
    
    
    </div>
  )
}

export default Registro