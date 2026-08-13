import { useLocation } from "react-router-dom";

function CategoryList() {
  const location = useLocation();

  const category = location.pathname.split("/")[2];

  const savedCafes =
    JSON.parse(localStorage.getItem("savedCafes")) || [];

  const categoryCafes = savedCafes.filter(
    (cafe) => cafe.category === category
  );

  return (
    <div>
      <h1>{category}</h1>

      {categoryCafes.map((cafe) => (
        <div key={cafe.id}>
          <img
            src={cafe.image}
            alt={cafe.name}
            width="150"
          />

          <div>
            <h2>{cafe.name}</h2>
            <p>{cafe.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;