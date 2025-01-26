import ReactDOM from "react-dom"
import React from "react";
import './ModalWindow.scss'

const BackDrop = () => {
    return <div className="backdrop"></div>
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
            {ReactDOM.createPortal(<BackDrop />, portal)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portal)}
        </React.Fragment>
    )
}
export default Modal