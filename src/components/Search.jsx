import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ query, onQuery }) {
  return (
    <div className="relative mb-8 w-full lg:w-1/3">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "#fff" }}
        className="absolute top-1/2 left-6 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-dark-elements px-16 py-3 w-full rounded-md placeholder:text-dark-text "
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
