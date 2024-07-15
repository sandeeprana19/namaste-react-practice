import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <UserClass name="First" location={"Dehradun class"} />
        {/* <User /> */}
      </div>
    );
  }
}

export default About;
