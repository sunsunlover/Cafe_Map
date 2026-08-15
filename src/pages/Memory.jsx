import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Memory() {
  const navigate = useNavigate();
 
  return (
    <div className="memory-container">
      <h1>思い出</h1>

      <button onClick={() => navigate("/visited")}>
        行ったところ
      </button>
    </div>

  );
}

export default Memory;