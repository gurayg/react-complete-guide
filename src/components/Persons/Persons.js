import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor", props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount()");
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] inside componentWillReceiveProps",
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[Persons.js] inside shouldComponentUpdate()",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Persons.js] inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[Persons.js] inside componentDidUpdate()");
  }

  render() {
    console.log("[Persons.js] inside render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          position={index}
          age={person.age}
          ref={this.lastPersonRef}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
