import React from 'react';
import { Link, useParams, useLocation, useRouteMatch } from 'react-router-dom';

const MovieCard = (props) => {
    const params = useParams()
    const id = params.id
    const {path, url} = useRouteMatch()
    let movie;

    if (path !== "/"){
      movie = props.movies.find((movie) => Number(movie.id) == id)
    } else {
      movie = props.movie
    }

    const saveMovie = () => {
      const addToSavedList = props.addToSavedList;
      addToSavedList(movie)
    }

    return (
        <div className="movie-card">
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
          <div className="save-button" onClick={saveMovie}>Save</div>
        </div>
    );
};

export default MovieCard;
