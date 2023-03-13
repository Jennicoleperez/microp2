import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import "./Row.css"

function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([])

    const base_url = "https://api.themoviedb.org/3"
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(`${base_url}${fetchUrl}`)
            setMovies(request.data.results)
            return request

        }
        fetchData();
    }, [fetchUrl])

   

  return (

    <div>
        <div className='fondo'>
            <h4 className='titulos'>{title}</h4>
        </div>
        <div className='container'>
            <div className='carteles'>


                {movies.map((movie) =>

                    <div
                    key={movie.id}
                    onClick={() => selectMovie(movie)}
                    >
                        <div className="cartel">
                            <img
                                src={`${URL_IMAGE + movie.poster_path}`}
                                alt=""
                                height={200}
                                width={200}
                            />
                        </div>
                        <div className='movieTitle'>
                            <h15 className="text-center">{movie.title}</h15>
                        </div>
                        <div className='movieSubT'>
                            <h17 className="text-center">Language: {movie.original_language}</h17>
                        </div>
                        <div className='movieSubT'>
                            <h17 className="text-center">Views: {movie.popularity}</h17>
                        </div>
                    </div>
                )}



                
            </div>

        </div>
    </div>
  )
}

export default Row