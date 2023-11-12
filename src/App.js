import Login from "./Components/Login/Login";
import {Routes,Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import  Report from "./Components/Pages/Report";
import ResultPage from "./Components/Pages/ResultPage";
import React from "react";
import AdminPage from "./Components/Pages/AdminPage";
// import mqtt from 'mqtt';

function App() {
 
  return (
   <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/report" element={<Report />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resultpage" element={<ResultPage />} />
      <Route path="/adminpage" element={<AdminPage/>} />
    </Routes>
    </div>
  );
}
export default App;
