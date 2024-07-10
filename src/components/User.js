import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    console.log("useEffect");

    return () => {
      console.log("unmounted component");
      clearInterval(timer);
    };
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Kolkata</h2>
      <h3>Contact: @sandeeprana</h3>
    </div>
  );
};

export default User;
