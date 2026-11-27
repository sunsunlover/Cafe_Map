import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Memory() {
  const navigate = useNavigate();
 
  return (
    <div className="memory-container">
      <h1>思い出</h1>
      <button className="back-button" onClick={() => navigate("/Map")}>
        前の画面に戻る
      </button>
    </div>

  );
}

export default Memory;