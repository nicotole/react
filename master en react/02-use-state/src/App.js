import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './components/MyFirstState';
import { Excercise01 } from './components/Excercise01';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en react - Hook useState</h1>
        <MyFirstState />
        <Excercise01 
          year= {new Date().getFullYear()}
        />
      </header>
    </div>
  );
}

export default App;
