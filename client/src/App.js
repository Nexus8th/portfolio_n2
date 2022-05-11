import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Pages/Login'
import Signup from './components/Pages/Signup';
import Exercices from './components/Pages/Exercices';
import Projets from './components/Pages/Projets';
import Contact from './components/Pages/Contact';
import Dashboard from './components/Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/exercices' element={<Exercices/>}></Route>
        <Route path='/projets' element={<Projets/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
