function Regions({ region, onRegion }) {
  return (
    <>
      <select
        className="bg-dark-elements px-6 py-3 rounded-md"
        value={region}
        onChange={(e) => onRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}

export default Regions;
