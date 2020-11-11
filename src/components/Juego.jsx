import React, { useState } from "react"
import Row from "./Row"

export default function Game() {

    const [guesses, setGuesses] = useState([0, 0, 0, 0]) //alternativas
    const [answers, setAnswers] = useState([])  //arreglos realizados
    const [secret, setSecret] = useState([]) //combinación a adivinar
    const [disabled, setDisabled] = useState(true)
    //               0            1       2       3       4           5
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']
    const [counter, setCounter] = useState(0)
    //

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
        setCounter(counter + 1)
        if (counter >= 9) {
            setDisabled(true)
            document.getElementById('resetBtn').style.visibility = ""
        }

        console.log(secret)
    }

    const generateColors = () => {

        const username = prompt('Ingrese su nickname')

        if (username == null || username.length === 0) {
            alert('Ingrese un nombre válido')
        } else {
            const code = []
            for (var i = 0; i < 4; i++) {
                code[i] = Math.floor(Math.random() * (6 - 1)) + 1;

            }
            setSecret(code)
            setDisabled(false)

            alert(username + ' el juego ha empezado')
            document.getElementById('btnStart').style.visibility = "hidden"
        }

    };

    const resetGame = () => {
        setGuesses([0, 0, 0, 0])
        setAnswers([])
        setSecret([])
        setCounter(0)

        generateColors();
    }

    /*
    const compareArrays = (arrayToCheck) => {
        const array1 = arrayToCheck
        const array2 = secret

        if (array1 === array2) {
            console.log('ganaste')
        } else {
            console.log(array1)
            
            array1.map((el, index) => {
                for (let i = 0; i <= 3; i++) {
                    if (el === array2[i]) {
                        setCorrectas(correctas + 1)
                        if (el === array2[index]) {
                            setPosiciones(posicionesCorrectas + 1)
                        }
                    }
                }
                return [correctas, posicionesCorrectas]
            }
            )
        }
    }
    */

    const styleOption = "butn btn-rounded"



    return (
        <div className="container-fluid" style={{ textAlign: 'center' }}>
            <div>
                <button className="btn" onClick={generateColors} id="btnStart">START GAME</button> <br />
                <button className="btn" onClick={resetGame} id="resetBtn" style={{ visibility: "hidden" }}>RESET GAME</button> <br />
                <button value="0" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[0]]}>1</button>
                <button value="1" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[1]]}>2</button>
                <button value="2" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[2]]}>3</button>
                <button value="3" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[3]]}>4</button>
                <button className="btn" onClick={saveArray} disabled={disabled} id="validate">Agregar</button>

                <div style={{ marginTop: '10px' }}>
                    {answers.map((el, index) => <Row key={index} arreglo={el} count={counter}  secretArray={secret} />)} 
                </div>
            </div>
        </div>
    )
}