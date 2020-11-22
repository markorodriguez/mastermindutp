import React from "react"

function Lose(props) {
    return (
        <div>
            <h1>¡Perdiste!</h1>
            <h6> <b>Username</b> </h6>
             <p>{props.username}</p>
             <h6><b>Intentos</b></h6>
             <p>{props.cant}</p>
        </div>
    )
}

export default Lose;