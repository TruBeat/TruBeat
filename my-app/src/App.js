import logo from './logo.svg';
import './App.css';
import Music from './components/UI/music';


function App() {
  return (
    <div>
      <h1 className="app-name"> TruBeat </h1>
      <h1 className="app-caption"> Beats for everyone... </h1>
      <div className='App'>
      <Music />
      </div>
    </div>
  );
}

export default App;
