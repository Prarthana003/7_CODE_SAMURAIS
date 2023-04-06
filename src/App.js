import logo from './logo.svg';
import './App.css';
import {React ,createContext} from "react";
import Quiz from './quiz';
import Inter from './interm';
import End  from './final';
import Lesson from './lessonPage'
import { Route,Routes } from 'react-router-dom';
/*
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
*/

/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route exact path = "/intermediate" element={<Inter/>}/>
      <Route exact path ="/end" element={<End/>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

function App() {
  return (
    <div>
     
    <Routes>
    <Route exact path = "/" element={<Quiz/>}/>
    <Route exact path = "/intermediate" element={<Inter/>}/>
    <Route exact path ="/end" element={<End/>}></Route>
    <Route exact path ="/lesson" element={<Lesson/>}  />
    </Routes>
   
    </div>
  );
}


export default App;
