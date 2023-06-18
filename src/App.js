import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './screens/About/About';
import Home from './screens/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  );
    
}

export default App;
