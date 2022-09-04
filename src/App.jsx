import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
import Navbar from "./components/Navbar";


const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App h-screen bg-gray-800">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;
