import Country from "./Country";

function CountryList({ countries, filteredCountries }) {
  return (
    <div className="px-8">
      {filteredCountries.length > 0
        ? filteredCountries.map((country) => (
            <Country key={country.cca2} country={country} />
          ))
        : countries.map((country) => (
            <Country key={country.cca2} country={country} />
          ))}
    </div>
  );
}

export default CountryList;
