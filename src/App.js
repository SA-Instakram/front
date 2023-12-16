import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/main";
import Profile from "./pages/Profile/profile";
import Loginpage from "./pages/login/login";
import NewFeed from "./pages/NewFeed/newFeed";
import Registerpage from "./pages/Register/register";
import EditProfile from "./pages/EditProfile/editprofile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/newfeed" element={<NewFeed />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
