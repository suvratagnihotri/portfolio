import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import MainNavbar from './components/MainNavbar';
import { useState ,createContext} from 'react';

export const AppContext = createContext();

function App() {
  const [userName,setUserName] = useState("Suvrat");
  const [companyName,setCompanyName] = useState("ABC");
  const [companyDomain,setCompanyDomain] = useState("Services");
  const [userProfile,setUserProfile] = useState("developer");
  const [timePeriod,setTimePeriod] = useState("1 month");
  const [workDescription,setWorkDescription] = useState("Work description goes here...");

  return (
    <div>
      <AppContext.Provider value={{userName,setUserName,
      companyName,setCompanyName,
      companyDomain,setCompanyDomain,
      userProfile,setUserProfile,
      timePeriod,setTimePeriod,
      workDescription,setWorkDescription}}>
      <BrowserRouter>
        <MainNavbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>


  );
}

export default App;
