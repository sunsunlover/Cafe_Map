import { useNavigate } from "react-router-dom";

import {
  FaMapMarkedAlt,
  FaHeart,
  FaSearch,
  FaList,
  FaLocationArrow,
  FaUser
} from "react-icons/fa";

function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">

      <button onClick={() => navigate("/page1")}>
        <FaMapMarkedAlt size={28} />
      </button>

      <button>
        <FaHeart size={28} />
      </button>

      <button>
        <FaSearch size={28} />
      </button>

      <button>
        <FaList size={28} />
      </button>

      <button>
        <FaLocationArrow size={28} />
      </button>

      <button>
        <FaUser size={28} />
      </button>

    </div>
  );
}
export default BottomNav;