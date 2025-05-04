import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Restaurant Container
 *    - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://img.freepik.com/premium-vector/burger-logo-vector-art-design_260747-250.jpg"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);

  const { resName, cuisine } = props;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/28/0d4996ad-d33b-403d-ab7d-5111c8aa37d4_3903b6ac-28cf-4072-adb0-c2ea5bb21ce7.jpg"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h3>{cuisine}</h3>
      <h3>4.4 stars</h3>
      <h3>38 minutes</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
