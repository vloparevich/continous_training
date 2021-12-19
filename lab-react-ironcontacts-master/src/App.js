import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './ContactCard';
import React from 'react';
import { useState } from 'react';

function App() {
  const [copyContacts, setAllTheContacts] = useState([...contacts]);
  const [myContacts, setContacts] = useState(copyContacts.slice(0, 5));

  const addRandomContactHandler = () => {
    const randomIndex = ~~(Math.random() * (copyContacts.length - 5)) + 5;
    const randomContact = copyContacts.splice(randomIndex, 1);
    setAllTheContacts([...copyContacts]);
    setContacts([...myContacts, ...randomContact]);
  };

  if (!myContacts) {
    console.log('setting new array');
    setContacts(copyContacts.slice(0, 5));
  }

  const sortByPopularityHandler = () => {
    const sortedContact = myContacts.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts([...sortedContact]);
  };

  const sortByNameHandler = () => {
    const sortedContactsByName = myContacts.sort((a, b) =>
      b.name > a.name ? -1 : 1
    );
    console.log(sortedContactsByName);
    setContacts([...sortedContactsByName]);
  };

  const deleteContactHandler = (id) => {
    const filteredContacts = myContacts.filter((contact) => contact.id !== id);
    setContacts([...filteredContacts]);
    if (!filteredContacts.length) {
      setContacts(copyContacts.slice(0, 5));
    }
  };

  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={addRandomContactHandler}>Add Random Contact</button>
      <button onClick={sortByPopularityHandler}>Sort By Popularity</button>
      <button onClick={sortByNameHandler}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
          {myContacts.map((contact) => (
            <ContactCard
              details={contact}
              key={contact.id}
              deleteContact={() => deleteContactHandler(contact.id)}
            />
          ))}
        </thead>
      </table>
    </div>
  );
}

export default App;
