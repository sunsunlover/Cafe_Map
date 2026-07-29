import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Rogo from "./pages/Rogo";
import Page1 from "./pages/Page1";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rogo />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;