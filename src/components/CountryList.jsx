import Country from "./Country";

function CountryList({ countries, filteredCountries, onSelectedCountry }) {
  return (
    <div className="px-8">
      {filteredCountries.length > 0
        ? filteredCountries.map((country) => (
            <Country
              key={country.cca2}
              country={country}
              onSelectedCountry={onSelectedCountry}
            />
          ))
        : countries.map((country) => (
            <Country
              key={country.cca2}
              country={country}
              onSelectedCountry={onSelectedCountry}
            />
          ))}
    </div>
  );
}

export default CountryList;
