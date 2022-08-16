import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">
        {`<`}
        <span> portfolio v0.15</span>
        {`/>`}
      </p>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "#F0F0F0" : "#C1C1C1",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        home
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => {
          return {
            color: isActive ? "#F0F0F0" : "#C1C1C1",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        projects
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "#F0F0F0" : "#C1C1C1",
            textDecorationLine: isActive ? "underline" : "none",
          };
        }}
      >
        about
      </NavLink>
    </nav>
  );
};

export default Navbar;
