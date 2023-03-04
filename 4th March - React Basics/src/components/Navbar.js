// 3 parts -> Import (optional), Definition, Export (optional)
import Logo from "./../assets/images/gift.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo} />
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
