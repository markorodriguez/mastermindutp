import React from "react"
import Axios from "axios"

function Won(props){

    const saveGame = ()=>{
        const data = {
            user:props.username,
            score: props.cant
        }
        Axios.post('http://localhost:4000/scores',data).then((response)=>{console.log(response)}).catch((e)=>console.log('error'))
        props.close();
    }

    return(
        <div>
            <h1>¡Ganaste!</h1>
            <h6> <b>Username</b> </h6>
             <p>{props.username}</p>
             <h6><b>Intentos</b></h6>
             <p>{props.cant}</p>
             <button className="btn btn-dark" onClick={saveGame}>¿Guardar?</button>
        </div>
    )
}

export default Won;