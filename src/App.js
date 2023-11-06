import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/main';
import Profile from './pages/Profile/profile';
import Loginpage from './pages/login/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
