import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src={LOGO_URL}
        alt="logo"
      />
      <nav>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
