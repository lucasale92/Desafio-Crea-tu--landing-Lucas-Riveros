import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <h1> Pastas Lau Estilo Casero</h1>
      <NavBar />
      <ItemListContainer greeting={'Hola! saludo desde props'} />
    </div>
  );
}

export default App;
