import './App.css';
import ContainsChampions from '../src/container/Champions/ContainsChampions';
import { Get } from './api/Get';
function App() {
  return (
    <div className="App">
      <ContainsChampions />
      < Get />
    </div>
  );
}

export default App;
