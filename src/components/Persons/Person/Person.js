import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./Person.module.css";
// import WithClass from "../../../hoc/WithClass";
// import WithClass from "../hoc/WithClass";
import Aux from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/WithClass";
import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount()");


  }

  focus() {
    // if (this.props.position === 0) {
    this.inputElement.current.focus()
    // }
  }

  render() {
    console.log("[Person.js] inside render()");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // <WithClass classes={styles.Person}>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} years old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type="text"
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </WithClass>
    );

    // return [
    //   <p key="1" onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old!
    //   </p>,
    //   <p key="2" >{this.props.children}</p>,
    //   <input
    //   key="3"
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}
export default WithClass(Person, styles.Person);
