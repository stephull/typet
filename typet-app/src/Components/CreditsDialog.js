import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import "./styles/CreditsDialog.css";

export default class CreditsDialog extends Component {
    render() {
        const {show, onHide} = this.props;
        return (
            <Modal className="creditsDialog" show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>Credits</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="creditsBody">
                        <b> ::: TYPET - Interactive Typing Test Program ::: </b><br/>
                        Made by Stephen Hullender<br/>
                        <a href="https://github.com/stephull/typet/" target="_blank">Typet Source Code</a><br/>
                        <a href="https://stephull.github.io/" target="_blank">Author's Portfolio</a><br/>
                    </p>
                </Modal.Body>
                    <button onClick={onHide}>EXIT</button>
            </Modal>
        );
    }
}