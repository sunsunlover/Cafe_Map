import { useNavigate } from "react-router-dom";
import './cafehome.css';

import { BsCupHotFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";

function List() {
  const navigate = useNavigate();
 
  return (
    <div className="list-container">
      <h1>保存リスト</h1>
      <FaHeart size={25} color="red"/>
      <h2>お気に入り</h2>
      <div className="category-grid">
      <button onClick={() => navigate("/category/coffee")}>
        <BsCupHotFill size={25} />
        <span>Coffee</span>
      </button>

      <button onClick={() => navigate("/category/cafe")}>
        <BsCupHotFill size={25} />
        <span>Cafe</span>
      </button>

      <button onClick={() => navigate("/category/sweets")}>
        <BsCupHotFill size={25} />
        <span>Sweets</span>
      </button>

      <button onClick={() => navigate("/category/bakery")}>
        <BsCupHotFill size={25} />
        <span>Bakery</span>
      </button>

      <button onClick={() => navigate("/category/restaurant")}>
        <BsCupHotFill size={25} />
        <span>Restaurant</span>
      </button>

      <button onClick={() => navigate("/category/roastery")}>
        <BsCupHotFill size={25} />
        <span>Roastery</span>
      </button>

      <button onClick={() => navigate("/category/attraction")}>
        <BsCupHotFill size={25} />
        <span>Attraction</span>
      </button>
    </div>

      {/* 行ったところ */}
            <ImCheckmark size={25} color="green"/>
      <h2 className="visited-title">行ったところ</h2>

      <div className="category-grid">
        <button onClick={() => navigate("/visited/coffee")}>
          Coffee
        </button>

        <button onClick={() => navigate("/visited/cafe")}>
          Cafe
        </button>

        <button onClick={() => navigate("/visited/sweets")}>
          Sweets
        </button>

        <button onClick={() => navigate("/visited/bakery")}>
          Bakery
        </button>

        <button onClick={() => navigate("/visited/restaurant")}>
          Restaurant
        </button>

        <button onClick={() => navigate("/visited/roastery")}>
          Roastery
        </button>

        <button onClick={() => navigate("/visited/attraction")}>
          Attraction
        </button>
      </div>


 </div>

  );
}

export default List;