import './App.css';
import { Routes, Route } from 'react-router-dom';
import Linktree from './pages/Linktree';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Photos from './pages/Photos';
import Reels from './pages/Reels';
import Divulgacoes from './pages/Divulgacoes';
import Lives from './pages/Lives';
import Desfiles from './pages/Desfiles';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Linktree /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/budget" element={ <Budget /> } />
        <Route path="/photos" element={ <Photos /> } />
        <Route path="/reels" element={ <Reels /> } />
        <Route path="/divulgacoes" element={ <Divulgacoes /> } />
        <Route path="/lives" element={ <Lives /> } />
        <Route path="/desfiles" element={ <Desfiles /> } />
      </Routes>
    </div>
  );
}

export default App;
