import React from 'react'
import collage from "../../image/collage.jpg"
import Style from './registro.module.css'

function Registro() {
  return (
    <div>
    
    <h1>Registro de usuario</h1>
    <section>
      <div className={Style.contenedor-image}>
        <img src={collage} alt="Collage de películas" className={Style.collage-image}/>
      </div>
    </section>
    
   
    
    
    
    </div>
  )
}

export default Registro
