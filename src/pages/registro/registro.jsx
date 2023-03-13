import React from 'react'
import collage1 from "../../image/collage1.jpg"
import Style from "../registro/registro.module.css"
import logo from '../../image/logo.svg'
import cartelera from '../../image/carteleracaracas.svg'
import { Link } from 'react-router-dom'
import { HOMEPAGE_URL, INICIARSESION_URL} from '../../constants/urls'
import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Registro() {

  const navigate = useNavigate();
  const [formData, setData] = useState({});

  const onSuccess = () => {
    navigate(HOMEPAGE_URL);
  };

  const onFail = (_error) => {
    console.log("REGISTER FAILED, Try Again");
  };

  const handleSignWithGoogle= async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(HOMEPAGE_URL),
    });
  } 

  const handleOnChange = (event)  => {
    setData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    await registerWithEmailAndPassword({
      userData: formData,
      onSuccess,
      onFail,
    });
  };

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
        <form className={Style.form}>
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
          
          <button type="submit" onClick={handleSubmit}>Entrar</button>


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