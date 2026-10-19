import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Account() {
  const navigate = useNavigate();
 
  return (
    <div className="account-container">
      <h1>アカウント</h1>
      <button className="back-button" onClick={() => navigate("/Map")}>
        前の画面に戻る
      </button>
    </div>

  );
}

export default Account;