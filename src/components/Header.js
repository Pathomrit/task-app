import "./Header.css";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const Header = ({ theme, setTheme }) => {
  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        <span className="btn-icon" onClick={ToggleTheme}>
          {theme === "light" ? <CiLight /> : <MdDarkMode />}
        </span>
      </div>
    </header>
  );
};

export default Header;
