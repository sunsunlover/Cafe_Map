import { useNavigate } from "react-router-dom";
import './cafehome.css';

import { FaHeart } from "react-icons/fa";

function List() {
  const navigate = useNavigate();
 
  return (
    <div className="list-container">
      <h1>保存リスト</h1>
      <button onClick={() => navigate("/category/coffee")}>
        <FaHeart size={15} />Coffee
      </button>

      <button onClick={() => navigate("/category/cafe")}>
        Cafe
      </button>

      <button onClick={() => navigate("/category/sweets")}>
        Sweets
      </button>

      <button onClick={() => navigate("/category/bakery")}>
        Bakery
      </button>

      <button onClick={() => navigate("/category/restaurant")}>
        Restaurant
      </button>

      <button onClick={() => navigate("/category/roastery")}>
        Roastery
      </button>

      <button onClick={() => navigate("/category/attraction")}>
        Attraction
      </button>

    </div>

  );
}

export default List;