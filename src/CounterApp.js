import React, { useState } from "react";
import "./style.css"

function AppHeading() {
    return <h1>Counter Application</h1>
}

function ButtonComponent({purpose}) {

    if(purpose.name === "increment") {
        return <button className = "counterButton" onClick = {purpose}>+</button>
    }

    else {
        return <button className = "counterButton" onClick = {purpose}>-</button>
    }

}

export default function CounterApp() {

    const[number, setNumber] = useState(0);
    const increment = function() {
        setNumber(number + 1);
    };

    const decrement = function() {
        setNumber(number - 1);
    };

    return(
        <div className = "counter">
            <AppHeading />
            <ButtonComponent purpose = {decrement} />
            <span className = "countValue"> {number} </span>
            <ButtonComponent purpose = {increment} />
        </div>
    );

}