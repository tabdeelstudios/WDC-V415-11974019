import { Link } from "react-router-dom";
import Logo from "./../assets/images/notebook.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo} />
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
