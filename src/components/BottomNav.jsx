import { useNavigate } from "react-router-dom";

import "./BottomNav.css";

import {
  FaMapMarkedAlt,
  FaHeart,
  FaSearch,
  FaCalendarAlt,
  FaRegQuestionCircle,
  FaUser
} from "react-icons/fa";

function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">

      <button onClick={() => navigate("/Map")}>
        <FaMapMarkedAlt size={28} />
      </button>

      <button onClick={() => navigate("/List")}>
        <FaHeart size={28} />
      </button>

      <button onClick={() => navigate("/Search")}>
        <FaSearch size={28} />
      </button>

      <button onClick={() => navigate("/Memory")}>
        <FaCalendarAlt size={28} />
      </button>

      <button onClick={() => navigate("/Help")}>
        <FaRegQuestionCircle size={28} />
      </button>

      <button onClick={() => navigate("/Account")}>
        <FaUser size={28} />
      </button>

    </div>
  );
}
export default BottomNav;