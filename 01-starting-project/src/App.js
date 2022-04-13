import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://dummy-react-lopa-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong...');
      }
      const jsData = await response.json();
      const loadedMovies = [];
      for (const property in jsData) {
        loadedMovies.push({
          id: property,
          title: jsData[property].title,
          releaseDate: jsData[property].releaseDate,
          openingText: jsData[property].openingText,
        });
      }
      console.log(loadedMovies);
      const transformedMovies = loadedMovies.map((movie) =>
        Object({
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.releaseDate,
          openingText: movie.openingText,
        })
      );
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    console.log(movie);
    const response = await fetch(
      'https://dummy-react-lopa-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        header: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default App;
