import React from "react";
import Button from "./Button";

export default function Row(props) {
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']
    const countRow = props.count;


    return (
        <div>
            {countRow<=10 ? props.arreglo.map((el,index)=><Button key={index} color={colors[el]} />) : props.funcion}
        </div>
    );
}
