import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [signInButtonName, setSignInButtonName] = useState("Sign In");

  return (
    <header>
      <img className="logo" src={LOGO_URL} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="sign-in"
            onClick={() => {
              signInButtonName === "Sign In" ? setSignInButtonName("Sign Out") : setSignInButtonName("Sign In");
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
