import './App.css';
import { Routes, Route } from 'react-router-dom';
import Linktree from './pages/Linktree';
import Home from './pages/Home';
import Budget from './pages/Budget';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Linktree /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="budget" element={ <Budget /> } /> 
      </Routes>
    </div>
  );
}

export default App;
