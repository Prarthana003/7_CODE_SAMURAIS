import logo from './logo.svg';
import './App.css';
import {React ,createContext} from "react";
import Quiz from './quiz';
import Inter from './interm';

import { Route,Routes } from 'react-router-dom';




function App() {
  return (
    <div>
     
    <Routes>
    <Route exact path = "/" element={<Quiz/>}/>
    <Route exact path = "/intermediate" element={<Inter/>}/>
   
    </Routes>
   
    </div>
  );
}

export default App;
