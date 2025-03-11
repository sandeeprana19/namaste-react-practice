import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(async () => {
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    console.log("useEffect");

    return () => {
      console.log("useEffect return");
      clearInterval(timer);
    };
  }, []);

  console.log("useEffect render");

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Kolkata</h3>
      <h4>Contact: @sandeeprana19</h4>
    </div>
  );
};

export default User;
