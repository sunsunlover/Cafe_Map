import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Help() {
  const navigate = useNavigate();
 
  return (
    <div className="help-container">
      <h1>ヘルプ</h1>
    <button className="back-button" onClick={() => navigate("/Map")}>
      前の画面に戻る
    </button>
</div>
  );
}

export default Help;