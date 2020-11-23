import React from "react"

function ProGamers(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h4>Nickname</h4>
                    <h2>{props.username}</h2>
                </div>
                <div className="col-6">
                    <h4>Intentos</h4>
                    <h2>{props.score}</h2>
                </div>
            </div>
        </div>
    )
}

export default ProGamers