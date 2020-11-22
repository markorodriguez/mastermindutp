import React, { useState } from "react"
import Row from "./Row"
import Modal from "../UI/Modal/Modal"
import Win from "../UI/Modal/Win"
import Lose from "../UI/Modal/Lose"
export default function Game() {

    const [guesses, setGuesses] = useState([0, 0, 0, 0]) //alternativas
    const [answers, setAnswers] = useState([])  //arreglos realizados
    const [secret, setSecret] = useState([]) //combinación a adivinar
    const [disabled, setDisabled] = useState(true)
    const [game, setGame] = useState(false) //true = juego finalizado 
    const [hints, setHints] = useState([])
    const [winCondition, setWinCondition] = useState(false) //true=ganado
    const [user, setUser] = useState("")
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
            setGame(true)
            setWinCondition(false)
            document.getElementById('resetBtn').style.visibility = ""
        }
        
        compareArrays(guesses, secret)
        setGuesses([0, 0, 0, 0])

    }

    const indexesToIgnoreA1 = [];
    const indexesToIgnoreA2 = [];
    let i = 0;
    let j = 0;


    const compareArrays = (a1, a2) => {
        let numSameTmp = 0;
        let numMisplacedTmp = 0;

        for (i = 0; i < a1.length; i++) {
            if (a1[i] === a2[i]) {
                numSameTmp ++;
                indexesToIgnoreA1.push(i);
            }
        }

        for (i = 0; i < a1.length; i++) {
            for (j = 0; j < a2.length; j++) {
                if (indexesToIgnoreA1.indexOf(i) === -1 && indexesToIgnoreA2.indexOf(j) === -1) {
                    if (a1[i] === a2[j]) {
                        numMisplacedTmp++;
                        indexesToIgnoreA1.push(i);
                        indexesToIgnoreA2.push(j);
                    }
                }
            }
        }

        if (numSameTmp === a1.length) {
            setHints((prevState)=>{return [...prevState, [numSameTmp, numMisplacedTmp]]})
            setGame(true)
            setWinCondition(true)
            setDisabled(true)
        }
        else {
            setHints((prevState)=>{return [...prevState, [numSameTmp, numMisplacedTmp]]})
        }

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
            setUser(username)
            alert(username + ' el juego ha empezado')
            document.getElementById('btnStart').style.display = "none"
        }

    };

    const resetGame = () => {
        setGuesses([0, 0, 0, 0])
        setAnswers([])
        setSecret([])
        setCounter(0)
        setHints([])
        generateColors();
    }

    const styleOption = "butn btn-rounded"
    
    const cancelModal = () => {
        setDisabled(true)
            setGame(false)
            setAnswers([])
            setWinCondition(false)
            document.getElementById('resetBtn').style.visibility = ""
    }

    return (
        <div className="container-fluid" style={{ textAlign: 'center' }}>
            <Modal show={game} modalClosed={cancelModal}   >
                {winCondition===true ? <Win username={user}  cant={counter} close={cancelModal}/> : <Lose username={user}  cant={counter}/>}
            </Modal>
            <div>
                <button className="btn" onClick={generateColors} id="btnStart">START GAME</button> <br />
                <button className="btn" onClick={resetGame} id="resetBtn" style={{visibility: "hidden" }}>RESET GAME</button> <br />
                <button value="0" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[0]]}>1</button>
                <button value="1" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[1]]}>2</button>
                <button value="2" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[2]]}>3</button>
                <button value="3" onClick={addCount} disabled={disabled} className={styleOption + " " + colors[guesses[3]]}>4</button>
                <button className="btn" onClick={saveArray} disabled={disabled} id="validate">Agregar</button>

                <div style={{ marginTop: '10px' }}>
                    {answers.map((el, index) => <Row key={index} arreglo={el} count={counter} secretArray={secret} colorhints={hints[index]}/>)}
                </div>
            </div>
           
        </div>
    )
}