import './App.css';
import Termekek from './termekek/Termekek.js';
import termekModel from './model/termekModel';

const tmodel = new termekModel();
function App() {
  return (
    <div className="App">
      <header>
        <h1>Termékek</h1>
      </header>
      <article>
        <Termekek termek={tmodel.getLista()}/>
      </article>
    </div>
  );
}

export default App;
