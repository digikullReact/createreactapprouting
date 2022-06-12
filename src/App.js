
import './App.css';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Lifecycle from './components/Lifecycle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/lifecycle" element={<Lifecycle />}/>
      </Routes>
    
    </div>
  );
}

export default App;
