import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Search() {
  const navigate = useNavigate();
 
  return (
    <div className="search-container">
      <h1>検索</h1>
    </div>

  );
}

export default Search;