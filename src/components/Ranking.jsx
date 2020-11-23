import React, { useState } from "react"
import Axios from "axios"
import ProGamers from "../components/ProGamers"

function Ranking() {
    const [data,setData] = useState([])

    const getRanking = () =>{
        Axios.get('http://localhost:4000/scores').then((response)=>{setData(response.data)}).catch((err)=>{console.log(err)})
    }

    return(
        <div className="container" style={{textAlign: 'center', marginTop: '5%'}}>
            <h1>Ranking de jugadores</h1>
            <button className="btn btn-dark" style={{marginTop: '20px'}} onClick={getRanking}>Mostrar Ranking</button>

            <div style={{marginTop: '50px'}}>
            {data.map((el,index)=><ProGamers key={index} username={el.username} score={el.score} /> )}
            </div>
      
        </div>
    )
}

export default Ranking