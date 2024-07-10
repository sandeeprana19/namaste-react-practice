import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummny",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);
    console.log(this.props.name + "Child component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(name + "Child render");

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @sandeeprana</h3>
      </div>
    );
  }
}

export default UserClass;
