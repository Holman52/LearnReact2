import ReactDOM from "react-dom"
import React from "react";
import './ModalWindow.scss'

const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.onClick}></div>
}

const ModalWindow = (props) =>{
    return (
        <div className="modal">
            <div className="content-modal">{props.children}</div>
        </div>
    )
}
const portal = document.getElementById('overlay')
const Modal = (props) =>{
    return (
        <React.Fragment>
        <div>
            {ReactDOM.createPortal(<BackDrop onClick={props.onCloseCart}/>, portal)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portal)}
        </div>
        </React.Fragment>
    )
}
export default Modal