import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="relative mb-8">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "#fff" }}
        className="absolute top-1/2 left-6 -translate-y-1/2"
      />
      <input
        type="search"
        placeholder="Search for a country..."
        className="bg-dark-elements px-16 py-3 w-full rounded-md placeholder:text-dark-text"
      />
    </div>
  );
}

export default Search;
