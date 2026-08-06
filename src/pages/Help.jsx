import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Help() {
  const navigate = useNavigate();
 
  return (
    <div className="help-container">
      <h1>ヘルプ</h1>
    </div>

  );
}

export default Help;