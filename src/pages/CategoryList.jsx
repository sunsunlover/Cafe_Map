import { useLocation, useNavigate } from "react-router-dom";
import "./cafehome.css";

function CategoryList() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname.split("/")[2];

  const savedCafes =
    JSON.parse(localStorage.getItem("savedCafes")) || [];

  const categoryCafes = savedCafes.filter(
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
            src={cafe.image || cafe.images?.[0]}
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

export default CategoryList;