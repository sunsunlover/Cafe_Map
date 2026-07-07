import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cafehome from "./pages/Cafehome";
import Page1 from "./pages/Page1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafehome />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;