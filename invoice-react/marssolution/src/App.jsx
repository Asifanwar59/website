//import logo from './logo.svg';
import logo from './mars_logo_v3.jpg' 
import './App.css';

function App() {
  let index = 2;
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Welcome to Mars Solutions
        </p>
        <div>
          <p>
            A one stop solution to your amazing Website development
          </p>
          <div>{index}</div>
        </div>
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
