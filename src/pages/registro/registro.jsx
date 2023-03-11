import React from 'react'
import collage1 from "../../image/collage1.jpg"
import Style from "../registro/registro.module.css"

function Registro() {
  return (
    <div>
    
      <div className={Style.fondito1}>
        <img src={collage1} alt="Collage de películas" />
      </div>
      

      <h1 className={Style.titulo}>Registro de usuario</h1>

      <div className={Style.formulario}>

      </div>

    
   
    
    
    
    </div>
  )
}

export default Registro