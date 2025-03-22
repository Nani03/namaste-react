import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [signInButtonName, setSignInButtonName] = useState("Sign In");

  return (
    <header>
      <img className="logo" src={LOGO_URL} alt="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <button
            className="sign-in"
            onClick={() => {
              signInButtonName === "Sign In"
                ? setSignInButtonName("Sign Out")
                : setSignInButtonName("Sign In");
            }}
          >
            {signInButtonName}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
