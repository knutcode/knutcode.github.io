import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">knutcode</p>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "grey",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "grey",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "white" : "grey",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
