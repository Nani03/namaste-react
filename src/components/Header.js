import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [signInButtonName, setSignInButtonName] = useState("Sign In");
  const onlineStatus =  useOnlineStatus(); 
  return (
    <header className="flex justify-between bg-green-200 shadow-lg">
      <img className="w-30" src={LOGO_URL} alt="logo" />
      <nav className="content-center">
        <ul className="flex justify-between items-center gap-4 mx-4">
          <li>Online Staus : {onlineStatus ? "🟢" : "🔴"}</li>
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
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
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
