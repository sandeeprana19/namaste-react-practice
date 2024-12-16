import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="about">
        <h1>About</h1>
        <p>This is a namaste react web series</p>
        {/* <User name="First" location="Dehradun" /> */}
        <UserClass name="Sandeep" location="Kolkata"></UserClass>
      </div>
    );
  }
}

export default About;
