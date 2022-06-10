import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import "./styles/Dialog.css";

export default class QueryDialog extends Component {
    render() {
        const {show, onHide} = this.props;
        return (
            <Modal className="queryDialog" show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>
                        <b>Typing Settings</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        TEST
                    </div>
                </Modal.Body>
                <button onClick={onHide}>EXIT</button>
            </Modal>
        );
    }
}