import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitch() {
  return (
    <button className="flex items-center gap-2">
      <FontAwesomeIcon icon={faMoon} style={{ color: "#fff" }} />
      <span className="font-semibold text-lg">Dark Mode</span>
    </button>
  );
}

export default ThemeSwitch;
