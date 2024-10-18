import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { Toaster } from "react-hot-toast";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./context/userContext";



function App() {

  const { user } = useContext(UserContext);

 


  return (
    <div className="App">
      <Routes>
      <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={user?<Home/>:<Login/>} />
        <Route path="/signup" element={user?<Home/>:<Signup />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
