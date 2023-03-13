import React from 'react';
import ReactDOM from 'react';
import Style from './detallePelicula.module.css';

const key = '90f27e7fca27aa224261ee839d68b94b';

const cargarP = async() => {
  try {
    const results = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}`);

console.log(results);

const data = await results.json();

let films = `
  <div>
    <h1 className='titulo'>Detalle de {data.title}</h1><br></br>
    <img src={data.poster_path} alt={data.title} /><br></br>
    <h2 className='subtitulo'>Description: {data.overview}</h2><br></br>
    <h2 className='subtitulo'>Original laguage: {data.original_language}</h2><br></br>
    <h2 className='subtitulo'>Budget: {data.budget}</h2><br></br>
    <h2 className='subtitulo'>Popularity: {data.popularity}</h2><br></br>
    <h2 className='subtitulo'>Release date: {data.release_date}</h2><br></br>
    <h2 className='subtitulo'>Status: {data.status}</h2><br></br>
    <h2 className='subtitulo'>Detalle de {data.title}</h2><br></br><br></br>
  </div>`

document.getElementById('detail').innerHTML = films;

  } catch (error) {
    alert('Pelicula no encontrada')
  }
}

cargarP();

function DetallePelicula() {
  return (
    <div className={Style.cuadro} id='detail'>

    </div>

  )
}

export default DetallePelicula