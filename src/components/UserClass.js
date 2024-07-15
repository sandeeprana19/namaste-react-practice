import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummny",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      // console.log("NAMASTE REACT OP");
    }, 1000);
    // console.log(this.props.name + "Child component did mount");

    const data = await fetch("  https://api.github.com/users/sandeeprana19");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("component will unmount");
  }

  render() {
    // console.log(this.state.userInfo);
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log(name + "Child render");

    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-xl">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h2>Location: {location}</h2>
        <h3>Contact: @sandeeprana</h3>
        <img src={avatar_url} alt="Avatar" />
      </div>
    );
  }
}

export default UserClass;
