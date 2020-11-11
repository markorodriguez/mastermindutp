import React, { useState } from "react";
import Button from "./Button";

export default function Row(props) {
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']
    const [corr, setCorr] = useState(0)
    const [posi, setPosi] = useState(0)
    const [inco, setInco] = useState(0)

    const validate = (evt) => {

        const array1 = props.arreglo
        const array2 = props.secretArray
        let correctas = 0
        let posicionesCorrectas = 0

        if (array1 === array2) {
            console.log('ganaste')
        } else {
            // eslint-disable-next-line array-callback-return
            array1.map((el, index) => {
                for (let i = 0; i <= 3; i++) {
                    //posiblemente requiera cambiar la estructura
                    if (el === array2[i]) {
                        correctas = correctas + 1
                        setCorr(correctas)
                        if (el === array2[index]) {
                            posicionesCorrectas = posicionesCorrectas + 1
                            setPosi(posicionesCorrectas)
                        }
                    }
                }
            }
            )
            let incorrectas = 4 - correctas
            console.log('las correctas son : ' + correctas)
            console.log('las incorrectas son : ' + incorrectas)
            console.log('las posiciones correctas son: ' + posicionesCorrectas)
        }

        setInco(4 - corr)

        if (inco <= 0) {
            evt.target.style.visibility = "hidden"
        }
    }

    return (
        <div>
            { props.arreglo.map((el, index) => <Button key={index} color={colors[el]} />)}
            <button onClick={validate}>Validar</button>
            <p>correctas : {corr}</p>
            <p>correctas y buena posicion :{posi}</p>
            <p>incorrectas : {inco}</p>
        </div>
    );
}
