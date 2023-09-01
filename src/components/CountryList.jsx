import Country from "./Country";

function CountryList({ countries }) {
  return (
    <div className="px-8">
      {countries.map((country) => (
        <Country key={country.cca2} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
