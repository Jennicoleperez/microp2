import React from "react";
import PropTypes from "prop-types";

function Card ({ movie }){

  Card.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string,
      Title: PropTypes.string,
      Year: PropTypes.string,
      Poster: PropTypes.string,
      Type: PropTypes.string,
    }).isRequired,
  }


  return(
    <div className="col-md-4">
      <div className="card animated fadeInUp">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="card-img-top"
          width="100"
        />
        <div className="card-body">
          <h4>{`${movie.title} (${movie.release_date})`}</h4>
        </div>
      </div>
    </div>
  )
  };


export default Card;