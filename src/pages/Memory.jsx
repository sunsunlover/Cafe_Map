import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Memory() {
  const navigate = useNavigate();
 
  return (
    <div className="memory-container">
      <h1>メモリ</h1>
    </div>

  );
}

export default Memory;