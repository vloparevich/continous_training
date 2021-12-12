import moviesData from './movies-data.json';
import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MoviesList() {
  const [movies, setMovies] = useState(moviesData);

  const handleDelete = (movieId) => {
    const updatedList = movies.filter((movie) => movie._id !== movieId);
    setMovies(updatedList);
  };

  return (
    <React.Fragment>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            movieDetails={movie}
            handleDelete={handleDelete}
          />
        );
      })}
    </React.Fragment>
  );
}

export default MoviesList;
