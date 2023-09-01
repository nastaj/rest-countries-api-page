import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Regions from "./components/Regions";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(function () {
    async function loadCountries() {
      try {
        setIsLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  return (
    <div className="bg-dark-bg text-dark-text min-h-screen">
      <header className="h-24 bg-dark-elements flex justify-between items-center px-4 mb-8">
        <Logo />
        <ThemeSwitch />
      </header>
      <main className="px-4">
        {selectedCountry && <CountryDetails />}

        <>
          <Filters>
            <Search />
            <Regions />
          </Filters>

          {isLoading ? <Loader /> : <CountryList countries={countries} />}
        </>
      </main>
    </div>
  );
}

export default App;
