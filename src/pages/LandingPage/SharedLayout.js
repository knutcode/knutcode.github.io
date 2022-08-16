import { Link, Outlet } from "react-router-dom";
import NavbarStyled from "../../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <NavbarStyled />
      <Outlet />
    </>
  );
};

export default SharedLayout;
