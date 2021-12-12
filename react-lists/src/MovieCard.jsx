import React from 'react';

function MovieCard(props) {
  const { _id, title, director, IMDBRating } = props.movieDetails;
  return (
    <div key={_id} className='MovieCard'>
      <h3>{title}</h3>
      <p>Director: {director}</p>
      <p>Rating: {IMDBRating}</p>
      <button className='btn-delete' onClick={() => props.handleDelete(_id)}>
        Delete{' '}
      </button>
    </div>
  );
}

export default MovieCard;
