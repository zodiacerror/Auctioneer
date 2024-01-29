import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";


const  App = () => {
    return (
      <div className={`theme-dark`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Profile" element={<Profile/>} />

           </Routes>
          </div>
          <RightBar />
        </div>
      </div>
    );



  
}

export default App;