import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MySecondComponent from './MySecondComponent';
import { MyThirdComponent } from './MyThirdComponent';
// import MyComponent so i can use it

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Master en React
        </p>
        <MyComponent />
        {/* I call MyComponent*/}
        <MySecondComponent />
        <MyThirdComponent />
      </header>
    </div>
  );
}

export default App;
