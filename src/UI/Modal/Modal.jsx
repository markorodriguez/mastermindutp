import React from "react"
import Backdrop from "../Backdrop/Backdrop"
import "./Modal.css"
import HOC from "../HOC/HOC"

function Modal(props){
    return(
        <HOC>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className="Modal">
                {props.children}
            </div>
        </HOC>
    )
}

export default Modal