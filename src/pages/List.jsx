import { useNavigate } from "react-router-dom";
import './cafehome.css';

function List() {
  const navigate = useNavigate();
 
  return (
    <div className="list-container">
      <h1>保存リスト</h1>
      <button onClick={() => navigate("/category/coffee")}>
        Coffee
      </button>

      <button onClick={() => navigate("/category/cake")}>
        Cake
      </button>

      <button onClick={() => navigate("/category/tea")}>
        Tea
      </button>
    </div>

  );
}

export default List;