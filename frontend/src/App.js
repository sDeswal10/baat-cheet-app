import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-2 md:p-4 h-screen flex md:items-center md:justify-center">
      <Toaster/>
      <Routes>
        <Route path="/" exact element={authUser ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/signup" element={authUser ? <Navigate to="/"/> : <SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
