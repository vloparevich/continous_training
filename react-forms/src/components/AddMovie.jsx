import { useState } from 'react';

export default function AddMovie(props) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const directorHandler = (e) => {
    setDirector(e.target.value);
  };

  const imdbHandler = (e) => {
    setIMDBRating(e.target.value);
  };

  const hasOscarHandler = (e) => {
    setHasOscars(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewMovie({
      title: title,
      director: director,
      IMDBRating: IMDBRating,
      hasOscars: hasOscars,
    });
    setTitle('');
    setDirector('');
    setIMDBRating(5);
    setHasOscars(true);
  };

  return (
    <div className='AddMovie'>
      <h4>Add a Movie</h4>

      {/* form will be added here */}
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type='text' name='title' value={title} onChange={titleHandler} />
        <label>Director: </label>
        <input
          type='text'
          name='director'
          value={director}
          onChange={directorHandler}
        />
        <label>IMDB Rating: </label>
        <input
          type='number'
          name='IMDBRating'
          value={IMDBRating}
          onChange={imdbHandler}
        />
        <label>Won Oscars: </label>
        <input
          type='checkbox'
          name='hasOscars'
          value={hasOscars}
          onChange={hasOscarHandler}
        />
        <button type='submit'>Add a movie</button>
      </form>
    </div>
  );
}
