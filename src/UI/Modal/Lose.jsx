import React from "react"


function Lose(props) {
    
    const colors = ['green', 'purple', 'red', 'yellow', 'blue', 'brown']

    return (
        <div>
            <h1>¡Perdiste!</h1>
            <h6> <b>Username</b> </h6>
             <p>{props.username}</p>
             <h6><b>Intentos</b></h6>
             <p>{props.cant}</p>
             <h6>Respuesta</h6>
            {props.answer.map((el,index)=><button key={'ans'+index} className={'butn btn-rounded '+ colors[index]}> {index} </button>)}
        </div>
    )
}

export default Lose;