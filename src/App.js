import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
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
        <Route path="/acl" element={<Exercise1 />} />
        <Route path="/meniscus" element={<Exercise2 />} />
        <Route path="/ankle" element={<Exercise3 />} />
        <Route path="/main" element={<MotionGenie />} />
        <Route path="/review/add" element={<ReviewForm />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
