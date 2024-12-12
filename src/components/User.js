import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("Namaste React OP");
    }, 1000);
    // console.log("use effect");

    return () => {
      // console.log("use effect return");
      clearInterval(timer);
    };
  }, []);

  console.log("render");

  return (
    <div className="user">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Contact: @akshaymarch7</h3>
    </div>
  );
};

export default User;
