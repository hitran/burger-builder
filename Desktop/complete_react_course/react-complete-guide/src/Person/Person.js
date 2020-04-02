import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old. {props.children ? props.children : null}</p>
            <input type="text" value={props.name} onChange={props.textChange}/>
        </div>
    )

}

export default person;