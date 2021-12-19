// src/components/MovieList.js

import { useState } from 'react';
import moviesDataJSON from '../movies-data.json';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import FilterMovies from './FilterMovies';

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setMoviesData(updatedMovies);
  };

  const filterMovieList = (filterValue) => {
    let filteredMovies;
    console.log('incoming filtervalue', filterValue);
    if (filterValue === 'All') {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter(
        (movie) => movie.title[0].toLowerCase() === filterValue.toLowerCase()
      );
    }
    setMovies(filteredMovies);
  };

  return (
    <div>
      <AddMovie addNewMovie={addNewMovie} />
      <FilterMovies filterMovieList={filterMovieList} />
      <h2>Movie List</h2>
      {movies.map((movie, index) => {
        return <MovieCard key={movie._id ? movie._id : index} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
