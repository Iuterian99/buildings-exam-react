import { useEffect, useState } from "react";
function Buildings() {
  const [buildings, setBuildings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/companies")
      .then((res) => res.json())
      .then((data) => setBuildings(data));
  }, []);
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        {buildings.map((building) => (
          <option key={building.company_id} value={building.company_id}>
            {building.company_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Buildings;
