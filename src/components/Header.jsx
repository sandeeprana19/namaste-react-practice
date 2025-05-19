import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="w-40" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link rel="stylesheet" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link rel="stylesheet" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link rel="stylesheet" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link rel="stylesheet" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
