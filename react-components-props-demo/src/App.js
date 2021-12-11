import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Greeting from './components/Greeting/Greeting';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Greeting firstName='Harper' />
      <ReactPlayer
        url='https://vimeo.com/channels/top/22439234'
        playing
        volume='1'
      />
    </div>
  );
}

export default App;
