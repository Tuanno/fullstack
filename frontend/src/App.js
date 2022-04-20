import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import AddPokemon from "./components/AddPokemon";
import EditPokemon from "./components/EditPokemon";
import TypeList from "./components/TypeList";
import AddType from "./components/AddType";
import EditType from "./components/EditType";
import CoacheList from "./components/CoacheList";
import AddCoache from "./components/AddCoache";
import EditCoache from "./components/EditCoache";
 
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={ <PokemonList/> } />
          <Route path="/add" element={ <AddPokemon/> } />
          <Route path="/edit/:id" element={ <EditPokemon/> } />
          <Route path="/list" element={ <TypeList/> } />
          <Route path="/add/type" element={ <AddType/> } />
          <Route path="/edit/type/:id" element={ <EditType/> } />
          <Route path="/Coache" element={ <CoacheList/> } />
          <Route path="/add/coache" element={ <AddCoache/> } />
          <Route path="/edit/coache/:id" element={ <EditCoache/> } />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
