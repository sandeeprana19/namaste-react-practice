import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name="Sandeep Rana (function)" />
      <UserClass name="Sandeep Rana (class)" />
    </div>
  );
};

export default About;
