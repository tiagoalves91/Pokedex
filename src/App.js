import './App.css';
import Header from "./components/Header"
import PokemonList from './components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <PokemonList/>
    </div>
  );
}

export default App;
