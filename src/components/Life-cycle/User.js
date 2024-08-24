import { Component } from "react";

import Student from "./Student";

class User extends Component {
  constructor(props) {
    super(props);

    console.log("- - ", this.props.name, "Constructor");
  }

  componentDidMount() {
    console.log("- - ", this.props.name, "Mounted");
  }

  render() {
    const { name, course, isStudent } = this.props;

    console.log("- - ", name, "Render");

    return (
      <div className="user">
        <div>Name: {name}</div>
        <div>Course: {course}</div>
        <Student name={name} isStudent={isStudent} />
      </div>
    );
  }
}

export default User;
