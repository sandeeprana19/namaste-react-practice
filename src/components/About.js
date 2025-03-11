import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h3>This is Namaste React Series</h3>
        <User name="Sandeep" />
      </div>
    );
  }
}

export default About;
