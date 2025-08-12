//import logo from './logo.svg';
import logo from './mars_logo_v3.jpg' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Mars Solutions
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connect with us for web development, software automation.
        </p>
        <a
          className="App-link"
          href="https://Marssolutions.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit for more informattion
        </a>
      </header>
    </div>
  );
}

export default App;
