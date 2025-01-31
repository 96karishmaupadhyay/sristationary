import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignIn/SignUp';
import Dashboard from './Components/Pages/AdminDashboard/Dashboard';


function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/> 
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   
  </Router>
  );
}

export default App;
