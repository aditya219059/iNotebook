import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import NoteState from './context/Notes/NoteStates'
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <NoteState>
        <Navbar />
        <Alert message="This is Alert"/>
        <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
