import { useEffect, useState } from "react";
function Buildings() {
  const [buildings, setBuildings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/companies")
      .then((res) => res.json())
      .then((data) => setBuildings(data));
  }, []);

  const handlyCompany = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/companies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const buildingIdentifier = buildings.map((building) => {
    if (building.company_id == "c0d6494d-779f-44cf-8eda-744778b87e3b") {
    fetch("http://localhost:9000/muradBuildings")
    .then((res) => res.json())
    .then((data) => setBuildings(data));
  });
  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        name="building_companies"
        onChange={handlyCompany}
      >
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
