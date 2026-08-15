import { useNavigate } from "react-router-dom";
import "./cafehome.css";

function VisitedList() {
  const navigate = useNavigate();

  return (
    <div className="list-container">
      <h1>行ったところ</h1>

      <button onClick={() => navigate("/visited/coffee")}>
        Coffee
      </button>

      <button onClick={() => navigate("/visited/cafe")}>
        Cafe
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
    </div>
  );
}

export default VisitedList;