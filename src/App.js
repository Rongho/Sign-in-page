import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import {Routes, Route} from "react-router-dom"
import { Signin } from './Components/Signin';
import Home from './Components/Home';


function App() {
  
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Signin />}/>
      <Route path='/Signup' element={<Signup />}/>
      <Route path='/Home' element={<Home />}/>
    </Routes>
    </div>
  );
}

export default App;
