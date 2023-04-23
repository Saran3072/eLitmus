import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Home/Login/Login";
import Signup from "./components/Home/SignUp/SignUp";
import Home from "./components/Home/Herosection/Home";
import Round1 from "./components/rounds/Round1/Round1";
import R1g from "./components/rounds/Round1/R1g";
import Round2 from "./components/rounds/Round2/Round2";
import R2g from "./components/rounds/Round2/R2g";
import Round3 from "./components/rounds/Round3/Round3";
import R3g from "./components/rounds/Round3/R3g";
import Round4 from "./components/rounds/Round4/Round4";
import R4g from "./components/rounds/Round4/R4g";
import Round5 from "./components/rounds/Round5/Round5";
import R5g from "./components/rounds/Round5/R5g";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/round1intro" element={<Round1 />} />
          <Route path="/round1" element={<R1g />} />
          <Route path="/round2intro" element={<Round2 />} />
          <Route path="/round2" element={<R2g />} />
          <Route path="/round3intro" element={<Round3 />} />
          <Route path="/round3" element={<R3g />} />
          <Route path="/round4intro" element={<Round4 />} />
          <Route path="/round4" element={<R4g />} />
          <Route path="/round5intro" element={<Round5 />} />
          <Route path="/round5" element={<R5g />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
