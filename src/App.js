import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ACL from "./pages/ACL";
import Hamstring from "./pages/Hamstring";
import Ankle from "./pages/Ankle";

import ReviewForm from "./pages/ReviewForm";
import ReviewPage from "./pages/ReviewPage";
import UserLogin from "./pages/UserLogin";


import ReviewAnkleForm from "./pages/ReviewAnkleForm";
import ReviewAnklePage from "./pages/ReviewAnklePage";

import ReviewHamstringForm from "./pages/ReviewHamstringForm";
import ReviewHamstringPage from "./pages/ReviewHamstringPage";

import ReviewAclForm from "./pages/ReviewAclForm";
import ReviewAclPage from "./pages/ReviewAclPage";


//import ReviewPage from "./pages/ReviewForm";
import "./assets/App.css";

function App() {
  const [user, setUser] =useState()
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} /> 
      {/* Don't want to display Header when in Landing Page AKA UserLogin */}
     
   
      <Routes>

        <Route path="/" element={<UserLogin setUser={setUser}/>} />
      
        
        <Route path="/home" element={<Home />} />
        <Route path="/acl" element={<ACL />} />
        <Route path="/hamstring" element={<Hamstring />} />
        <Route path="/ankle" element={<Ankle />} />
    
        <Route path="/review/add" element={<ReviewForm />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/review/add/ankle" element={<ReviewAnkleForm/>} />
        <Route path="/review-ankle" element={<ReviewAnklePage/>} />

        <Route path="/review/add/hamstring" element={<ReviewHamstringForm/>} />
        <Route path="/review-hamstring" element={<ReviewHamstringPage/>} />

        <Route path="/review/add/acl" element={<ReviewAclForm/>} />
        <Route path="/review-acl" element={<ReviewAclPage/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
