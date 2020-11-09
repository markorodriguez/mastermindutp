import React from "react";
import Button from "./Button";

export default function Row(props) {
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']

    return (
        <div>
            {props.arreglo.map((el,index)=><Button key={index} color={colors[el]} />)}
        </div>
    );
}
