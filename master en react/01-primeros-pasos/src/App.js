import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MySecondComponent from './MySecondComponent';
import { MyThirdComponent } from './MyThirdComponent';
import { MyFourthComponent } from './MyFourthComponent';
import { MyEventsComponent } from './MyEventsComponent';
// import MyComponent so i can use it

function App() {

  const ficha_medica={
    altura : "175cm",
    grupo: "E+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

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
        <MyFourthComponent 
          nombre='Nico' 
          apellido='Toledo'
          ficha={ficha_medica}
          />

        <MyEventsComponent />
      </header>
    </div>
  );
}

export default App;
