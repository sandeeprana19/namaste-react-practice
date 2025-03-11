import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    console.log("Child Component will Unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sandeeprana19</h4>
      </div>
    );
  }
}

export default UserClass;
