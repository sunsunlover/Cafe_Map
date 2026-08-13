import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Rogo from "./pages/Rogo";
import Map from "./pages/Map";
import Home from "./pages/Home"
import List from "./pages/List";
import CategoryList from "./pages/CategoryList";
import Search from "./pages/Search";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Memory from "./pages/Memory";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rogo />} />
        <Route path="/map" element={<Map />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/category/:category" element={<CategoryList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/help" element={<Help />} />
        <Route path="/account" element={<Account />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </Router>
  );
}

export default App;