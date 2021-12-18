import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './ContactCard';

function App() {
  const handleRemove = (id) => {};
  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contacts.map(
            (contact, index, array) =>
              index < 10 && <ContactCard details={contact} key={contact.id} />
          )}
        </thead>
      </table>
    </div>
  );
}

export default App;
