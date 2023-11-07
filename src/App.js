import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/main";
import Profile from "./pages/Profile/profile";
import Loginpage from "./pages/login/login";
import NewFeed from "./pages/NewFeed/newFeed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/newfeed" element={<NewFeed />} />
      </Routes>
    </div>
  );
}

export default App;
