import React, { useState } from "react";
import Button from "./Button";

export default function Row(props) {
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']
    const _ = require('lodash')

    const [corr, setCorr] = useState(0)
    const [posi, setPosi] = useState(0)

    let acumulador = 0
    let exactos = 0
    const arr = props.arreglo
    const brr = props.secretArray
    const validate = (evt) => {


        for (let i = 0; i <= 3; i++) {
            const booleanValue = _.includes(brr, arr[i])
            if (booleanValue === true) {
                acumulador = acumulador + 1
                if (arr[i] === brr[i]) {
                    exactos = exactos + 1
                }
            }
        }
        setCorr(acumulador)
        setPosi(exactos)
        console.log('existen ' + acumulador)
        console.log('existen exactos ' + exactos)

        evt.target.disabled = true
    }

    return (
        <div className="respuestas">
            { props.arreglo.map((el, index) => <Button key={index} color={colors[el]} />)}
            <button className="handleValidate" onClick={validate}>Validar</button>
            <div className="btn-container">
                <button className="validar" disabled style={{backgroundColor:'red'}}>{corr }</button>
                <button className="validar" disabled style={{backgroundColor:'black', color: '#decdc3'}} >{posi }</button>
            </div>
        </div>
    );
}
