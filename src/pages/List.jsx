import { useNavigate } from "react-router-dom";
import './cafehome.css';

function List() {
  const navigate = useNavigate();
 
  return (
    <div className="list-container">
      <h1>保存リスト</h1>
    </div>

  );
}

export default List;