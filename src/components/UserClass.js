import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child component did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log("Child render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Count2: {count2}</h1>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @sandeeprana</h3>
      </div>
    );
  }
}

export default UserClass;
