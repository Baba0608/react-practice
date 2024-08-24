import { Component } from "react";

import User from "./User";

class Home extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Mounted");
  }

  render() {
    console.log("Parent Render");

    return (
      <div className="home">
        <div>This is used to display dummy Users</div>
        <div>
          <User name="Baba" course="React Js" isStudent="YES" />
          <User name="Akshay" course="Node Js" isStudent="NO" />
          <User name="Kunal" course="DSA" isStudent="NO" />
        </div>
      </div>
    );
  }
}

export default Home;
