import { useEffect } from "react";

function CountryDetails({ country, countries, onSelectedCountry }) {
  const {
    name,
    population,
    region,
    subregion,
    tld: domain,
    capital,
    currencies: currencies,
    languages,
    borders,
    flags: flag,
  } = country;

  const locale = navigator.language;

  const borderCountries = countries.filter((country) => {
    return borders.find((border) => border === country.cca3);
  });

  useEffect(
    function () {
      console.log(borderCountries);
    },
    [borderCountries]
  );

  return (
    <div>
      <button
        className="px-8 py-2 bg-dark-elements shadow-md mb-16"
        onClick={() => onSelectedCountry(null)}
      >
        &larr; Back
      </button>
      <img src={flag.svg} alt={flag.alt} className="mb-12" />

      <section className="mb-12">
        <h2 className="mb-6 font-extrabold text-2xl">{name.common}</h2>
        <p className="mb-2">
          <span className="font-semibold">Native Name:</span>{" "}
          <span className="font-light">
            {Object.values(name.nativeName)[0].common}
          </span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Population:</span>{" "}
          <span>{new Intl.NumberFormat(locale).format(population)}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Region:</span>{" "}
          <span className="font-light">{region}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Sub Region:</span>{" "}
          <span>{subregion}</span>
        </p>
        <p className="mb-12">
          <span className="font-semibold">Capital:</span> <span>{capital}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Top Level Domain:</span>{" "}
          <span>{domain}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Currencies:</span>{" "}
          <span>{Object.values(currencies)[0].name}</span>
        </p>
        <p className="mb-2">
          <span className="font-semibold">Languages:</span>{" "}
          <span>{Object.values(languages).join(", ")}</span>
        </p>
      </section>

      <section className="pb-12">
        <h3 className="font-semibold text-xl mb-4">Border Countries:</h3>
        <ul className="grid grid-cols-3 gap-2">
          {borderCountries.map((country) => (
            <li
              className="bg-dark-elements px-2 py-1 text-center text-sm cursor-pointer"
              key={country.cca3}
              onClick={() => onSelectedCountry(country)}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CountryDetails;
