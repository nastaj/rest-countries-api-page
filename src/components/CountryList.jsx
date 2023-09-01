import Country from "./Country";

function CountryList({
  countries,
  filteredCountries,
  onSelectedCountry,
  formatNumber,
}) {
  return (
    <div className="px-8 text-homepage">
      {filteredCountries.length > 0
        ? filteredCountries.map((country) => (
            <Country
              key={country.cca2}
              country={country}
              onSelectedCountry={onSelectedCountry}
              formatNumber={formatNumber}
            />
          ))
        : countries.map((country) => (
            <Country
              key={country.cca2}
              country={country}
              onSelectedCountry={onSelectedCountry}
              formatNumber={formatNumber}
            />
          ))}
    </div>
  );
}

export default CountryList;
