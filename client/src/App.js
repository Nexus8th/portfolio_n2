import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Exercices from './Pages/Exercices';
import Projets from './Pages/Projets';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import { UidContext } from './components/Context/AppContext';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [uid, setUid] = useState(null)

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
      .then((res) => {
        setUid(res.data)
      })
      .catch((err) => {
        console.log("No token")
      })
    }
    fetchToken()
  }, [uid])

  return (
    <UidContext.Provider value={uid}>
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
    </UidContext.Provider>
  );
}

export default App;
