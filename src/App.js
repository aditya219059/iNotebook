import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import NoteState from './context/Notes/NoteStates'
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react'

function App() {
  const [alert, setAlert] = useState('');
  const salert =(message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div className="App">
      <NoteState>
        <Navbar salert={salert}/>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path='/' element={<Home salert={salert}/>} ></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/login' element={<Login salert={salert} />}></Route>
          <Route exact path='/signup' element={<Signup salert={salert} />}></Route>
        </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
