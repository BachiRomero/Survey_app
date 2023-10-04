import Home from './pages/home/home'
import Result from './pages/results/results'
import Exit from './pages/exit/exit'
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </div>
  );
}

export default App;
