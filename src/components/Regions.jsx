import { useState } from "react";

function Regions() {
  const [region, setRegion] = useState("");

  return (
    <>
      <select
        className="bg-dark-elements px-6 py-3 rounded-md"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
}

export default Regions;
