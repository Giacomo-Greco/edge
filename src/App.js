import { Route, Routes } from "react-router-dom";
import './App.css';
import './classes.css';
import './desktop.css';
import {useSelector, useDispatch} from 'react-redux';

import Navbar from './components/navbar/navbar';
import Home from './pages/home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<><Navbar/><Home /></>}/>
      <Route path="/home" element={<><Navbar /><Home /></>}/>
    </Routes>
  )

}

export default App;
