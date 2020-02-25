import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([])
  const [savedList, setSavedList] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
    console.log(movies)
  }, []);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/'>
        <MovieList movies={movies} addToSavedList={addToSavedList} />
      </Route>
      <Route path='/movies/:id'>
        <MovieCard movies={movies} addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
