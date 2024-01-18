
import './App.css';
// import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        {/* Ejercicio con el hook useMemo */}
        <Tareas />


        {/* <Gestion /> Parte del ejercicio con el metodo memo para componentes */}
      </header>
    </div>
  );
}

export default App;
