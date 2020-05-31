import React from "react";
import { closeIcon } from "./iconPath";
import "./Modal.scss";

export default class Modal extends React.Component {
    render() {
        const { open, onClick, children } = this.props;

        if (!open) {
            return null;
        }
        return (
            <div className="ModalWrapper" onClick={onClick}>
                {children}
                <div
                    className="ButtonCloseModal"
                    onClick={onClick}
                    title="Close"
                    ariaLabel="Close"
                >
                {closeIcon}
                </div>
            </div>
        );
    }
}
