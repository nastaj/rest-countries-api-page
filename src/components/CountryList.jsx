import Country from "./Country";

function CountryList({
  countries,
  filteredCountries,
  onSelectedCountry,
  formatNumber,
}) {
  return (
    <div className="px-8 text-homepage md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 xl:gap-24">
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
