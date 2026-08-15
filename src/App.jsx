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
import VisitedList from "./pages/VisitedList";
import VisitedCategoryList from "./pages/VisitedCategoryList";


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
        <Route path="/visited" element={<VisitedList />} />
        <Route path="/visited/:category" element={<VisitedCategoryList />} />
      </Routes>
    </Router>
  );
}

export default App;