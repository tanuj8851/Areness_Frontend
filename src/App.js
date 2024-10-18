import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import {Toaster} from "react-hot-toast";
import { UserContext } from "./context/userContext";
import { useContext } from "react";

function App() {
const {user} = useContext(UserContext);

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user?<Login />:<Home/>} />
        <Route path="/signup" element={!user?<Signup />:<Home/>} />
      </Routes>

      <Toaster/>
    </div>
  );
}

export default App;
