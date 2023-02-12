import './App.css';
import ContainsChampions from '../src/container/Champions/ContainsChampions';
import { useGet } from './api/Get';
function App() {
  useGet();
  return (
    <div className="App">
      <ContainsChampions />
    </div>
  );
}

export default App;
