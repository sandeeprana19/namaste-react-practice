import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component did mount");
    const data = await fetch("https://api.github.com/users/sandeeprana19");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      // console.log("Namaste React OP");
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("component did update");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "child render");

    return (
      <div className="user">
        <img src={avatar_url} alt="Avatar" />
        <h1>Name: {name}</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>Location: {location}</h2>
        <h3>Contact: @akshaymarch7</h3>
      </div>
    );
  }
}

export default UserClass;
