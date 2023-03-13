import React from 'react';
import ReactDOM from 'react';

const keyAPI = '90f27e7fca27aa224261ee839d68b94b'

const cargarP = async() => {

  try {
      const response  = await fetch(`https://api.themoviedb.org/3/movie/315162?api_key=${keyAPI}`);

      console.log(response);

      const data = await response.json();

      let films = ``;
      films = `<h1>${data.title}</h1> <h2>${data.id}</h2> <h2>${data.overview}</h2>
      <h2><img src='${data.poster_path}' alt='${data.title}'></h2>`

      document.getElementById('root').innerHTML = films;


  } catch (error) {
      console.log(error);
  }

}

cargarP();

function DetallePelicula() {
  return (
    <div>DetallePelicula
      <h1></h1>
    </div>
  )
}

export default DetallePelicula