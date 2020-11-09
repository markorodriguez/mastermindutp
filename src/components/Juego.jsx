import React, { useState } from "react"

import Row from "./Row"

export default function Game() {

    const [guesses, setGuesses] = useState([0, 0, 0, 0])
    const [answers, setAnswers] = useState([])
    const [secret, setSecret] = useState([])
    const [disabled, setDisabled] = useState(true)
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']

    const addCount = (evt) => {
        let savedArray = [...guesses];
        let currentValue = savedArray[evt.target.value]

        if (currentValue < 5) {
            savedArray[evt.target.value] = currentValue + 1
            setGuesses(savedArray)

        } else {
            savedArray[evt.target.value] = 0
            setGuesses(savedArray)
        }
    }

    const saveArray = () => {
        setAnswers((prevState) => { return [...prevState, guesses] })
    }

    const generateColors = (evt) => {

        const code = []
        for (var i = 0; i < 4; i++) {
            code[i] = Math.floor(Math.random() * (6 - 1)) + 1;

        }
        setSecret(code)
        console.log(secret)
        setDisabled(false)

        alert('El juego ha empezado')

        evt.target.style.visibility = "hidden"
    };


    const styleOption = "butn btn-rounded"
    
    return (
        <div className="container-fluid" style={{ textAlign: 'center' }}>
            <button className="btn" onClick={generateColors} id="btnStart">START GAME</button> <br/>

            <button value="0" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[0]]}>1</button>
            <button value="1" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[1]]}>2</button>
            <button value="2" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[2]]}>3</button>
            <button value="3" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[3]]}>4</button>
            <button className="btn" onClick={saveArray} disabled={disabled} id="validate">Validate</button>
            

            <div style={{ marginTop: '30px' }}>
                {answers.map((el, index) => <Row key={index} arreglo={el} />)}
            </div>

        </div>


    )
}