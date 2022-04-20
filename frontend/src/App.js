// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Instalação do reactjs
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import AddPokemon from "./components/AddPokemon";
import EditPokemon from "./components/EditPokemon";
 
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/add">
            <AddPokemon />
          </Route>
          <Route path="/edit/:id">
            <EditPokemon />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
