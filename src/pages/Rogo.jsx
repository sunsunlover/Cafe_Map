import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Rogo() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="photo-box">  
      </div>
    </div>
  );
}

export default Rogo;