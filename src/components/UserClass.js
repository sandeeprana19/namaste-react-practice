import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>Name: {this.props.name}</h1>
        <h2>Location: Kolkata</h2>
        <h3>Contact: @sandeeprana</h3>
      </div>
    );
  }
}

export default UserClass;
