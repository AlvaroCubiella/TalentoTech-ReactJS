import { Nav } from "../Nav/Nav";
import logo from "../../assets/FlowTECH.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href={"/"}>
          <img src={logo} alt="logo FlowTECH" />
        </a>
      </div>
      <Nav />
    </header>
  );
};
