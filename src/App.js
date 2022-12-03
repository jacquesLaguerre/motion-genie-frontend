import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ACL from "./pages/ACL";
import Meniscus from "./pages/Meniscus";
import Ankle from "./pages/Ankle";
import MotionGenie from "./pages/MotionGenie";
import ReviewForm from "./pages/ReviewForm";
import ReviewPage from "./pages/ReviewPage";


//import ReviewPage from "./pages/ReviewForm";
import "./assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
     
   
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/acl" element={<ACL />} />
        <Route path="/meniscus" element={<Meniscus />} />
        <Route path="/ankle" element={<Ankle />} />
        <Route path="/main" element={<MotionGenie />} />
        <Route path="/review/add" element={<ReviewForm />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
