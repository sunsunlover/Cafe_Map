import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Search() {
  const navigate = useNavigate();
 
  return (
    <div className="search-container">
      <h1>検索</h1>
      <button className="back-button" onClick={() => navigate("/Map")}>
        前の画面に戻る
      </button>
    </div>
  );
}

export default Search;