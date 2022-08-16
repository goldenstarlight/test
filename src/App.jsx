import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Index';
import Congrate from './pages/Congrate';
import Plan from './pages/Plan';


const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/congrate" element={<Congrate/>} />
        <Route path="/plan" element={<Plan/>} />
      </Routes>
    </Router>
  );
};

export default App;
