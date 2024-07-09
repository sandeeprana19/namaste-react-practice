import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <UserClass name="Sandeep Rana (class)" location={"Dehradun class"} />
      </div>
    );
  }
}

export default About;
