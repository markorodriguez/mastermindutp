import React from "react"

export default function Button(props){

    const styleBtn = "btn btn-rounded"

    return(
       <button className={styleBtn +" "+ props.color}></button>
    )
}