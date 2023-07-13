import logo from './logo.svg';
import './App.css';
import { PuebasComponent } from './PuebasComponent';
import { AjaxComponent } from './AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PuebasComponent />
        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
