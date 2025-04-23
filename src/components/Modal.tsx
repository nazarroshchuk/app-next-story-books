import React from "react";

import './Modas.scss'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
    if(!isOpen) {
        return null;
    }

    return (
        <div className='Modal'>
            <div className="Modal__content">
                <div className="Modal__close" onClick={onClose}>X</div>
                <div></div>
            </div>
        </div>
    )
}