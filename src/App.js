import logo from './logo.svg';
import './App.css';
import Restaurants from './Components/Restaurants.js';
import Header from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurants />
    </div>
  );
}

export default App;
