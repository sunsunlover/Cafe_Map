import { useLocation, useNavigate } from "react-router-dom";
import "./cafehome.css";

function VisitedCategoryList() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname.split("/")[2];

  const visitedCafes =
    JSON.parse(localStorage.getItem("visitedCafes")) || [];

  const categoryCafes = visitedCafes.filter(
    (cafe) => cafe.category === category
  );

  return (
    <div className="category-list-container">
      <h1>{category}</h1>

      <div className="cafe-list">
        {categoryCafes.map((cafe) => (
          <div 
            className="cafe-card" 
            key={cafe.id}
            onClick={() =>
             navigate("/map", {
               state: { cafeId: cafe.id }
            })
        }
       >

            <img
              src={cafe.image}
              alt={cafe.name}
              className="cafe-card-image"
            />

            <div className="cafe-card-info">
              <h2>{cafe.name}</h2>
              <p>{cafe.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitedCategoryList;