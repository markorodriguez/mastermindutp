import React from "react";
import Button from "./Button";

export default function Row(props) {
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']

    return (
        <div className="respuestas">
            { props.arreglo.map((el, index) => <Button key={index} color={colors[el]} />)}
            <div className="btn-container">
    <button className="validar" disabled style={{backgroundColor:'red'}}>{props.colorhints[0]}</button>
                <button className="validar" disabled style={{backgroundColor:'black', color: '#decdc3'}} >{props.colorhints[1]}</button>
            </div>
        </div>
    );
}
