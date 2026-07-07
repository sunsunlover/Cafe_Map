import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './cafehome.css';

function Cafehome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/page1");
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

export default Cafehome;