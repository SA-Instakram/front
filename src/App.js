import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/main";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
