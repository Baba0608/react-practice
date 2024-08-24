import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);

    console.log("- - - - ", this.props.name, "Student Constructor");
  }

  componentDidMount() {
    console.log("- - - - ", this.props.name, "Student Mounted");
  }

  render() {
    console.log("- - - - ", this.props.name, "Student Render");
    const { isStudent } = this.props;
    return (
      <div>
        <div>Student : {isStudent}</div>
      </div>
    );
  }
}

export default Student;
