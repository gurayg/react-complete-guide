import React from "react";
import styles from "./Cockpit.module.css";
import Aux from "../../hoc/Auxiliary";
const cockpit = props => {
    console.log(styles);
    let btnClass = styles.Button;
    console.log(btnClass);
    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(" ");
    }

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p className={classes.join(" ")}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
};

export default cockpit;
