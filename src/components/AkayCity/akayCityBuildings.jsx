import { useEffect, useState } from "react";
function AkayCityBuildings() {
  const [akayCity, setakayCity] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/akayCityBuildings")
      .then((res) => res.json())
      .then((data) => setakayCity(data));
  }, []);
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        {akayCity.map((building) => (
          <option
            key={building.building_id}
            value={building.building_name}
            name={building.building_name}
          >
            {building.building_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AkayCityBuildings;
