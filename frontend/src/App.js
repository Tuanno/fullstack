import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import AddPokemon from "./components/AddPokemon";
import EditPokemon from "./components/EditPokemon";
 
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={ <PokemonList/> } />
          <Route path="/add" element={ <AddPokemon/> } />
          <Route path="/edit/:id" element={ <EditPokemon/> } />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
