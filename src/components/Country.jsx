function Country({ country }) {
  const {
    name: { common: name },
    population,
    region,
    capital,
    flags: flag,
  } = country;

  return (
    <div className="bg-dark-elements rounded-md mb-8">
      <img src={flag.svg} alt={flag.alt} className="rounded-t-md" />

      <section className="px-6 pt-8 pb-6">
        <h2 className="mb-4 font-extrabold text-2xl">{name}</h2>
        <p className="mb-2">
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </section>
    </div>
  );
}

export default Country;
