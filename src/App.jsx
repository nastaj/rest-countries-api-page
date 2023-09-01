import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Main from "./components/Main";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Regions from "./components/Regions";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = countries.filter((country) => {
    if (region && !query) {
      return country.region === region;
    }

    if (query && !region) {
      return country.name.common.toLowerCase().includes(query.toLowerCase());
    }

    if (region && query) {
      return (
        country.region === region &&
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
    }
  });

  function formatNumber(number) {
    const locale = navigator.language;
    return new Intl.NumberFormat(locale).format(number);
  }

  useEffect(function () {
    async function loadCountries() {
      try {
        setIsLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  return (
    <Layout>
      <Header>
        <Logo />
        <ThemeSwitch />
      </Header>

      <Main>
        {selectedCountry ? (
          <CountryDetails
            country={selectedCountry}
            countries={countries}
            onSelectedCountry={setSelectedCountry}
            formatNumber={formatNumber}
          />
        ) : (
          <>
            <Filters>
              <Search query={query} onQuery={setQuery} />
              <Regions region={region} onRegion={setRegion} />
            </Filters>

            {isLoading ? (
              <Loader />
            ) : (
              <CountryList
                countries={countries}
                filteredCountries={filteredCountries}
                onSelectedCountry={setSelectedCountry}
                formatNumber={formatNumber}
              />
            )}
          </>
        )}
      </Main>
    </Layout>
  );
}

export default App;
