import React from 'react';
import './ContactCard.css';

export default function ContactCard(props) {
  const { name, pictureUrl, popularity, wonOscar, wonEmmy } = props.details;
  return (
    <tr>
      <td>
        <img width='100px' src={pictureUrl} alt='contact' />
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <h3>{popularity.toFixed(2)}</h3>
      </td>
      <td>{wonOscar && <p>🏆</p>}</td>
      <td>{wonEmmy && <p>🥳</p>}</td>
      <td>
        <button onClick={() => props.deleteContact()}>Delete</button>
      </td>
    </tr>
  );
}
