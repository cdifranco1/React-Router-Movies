import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'
import { useHistory, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieList = ({movies, addToSavedList}) => {
    return (
      <div className="movie-list">
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`}>
            <MovieCard key={movie.id} movie={movie} addToSavedList={addToSavedList}/>
          </Link>
        ))}
      </div>
    );
}

export default MovieList;
