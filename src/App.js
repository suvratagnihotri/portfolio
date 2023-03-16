import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <BrowserRouter>
    <MainNavbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
