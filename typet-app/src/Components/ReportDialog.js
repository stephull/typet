import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import "./styles/Dialog.css";

export default class ReportDialog extends Component {
    render() {
        const {show, onHide} = this.props;
        return (
            <Modal className="reportDialog" show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>
                        <b>Report (Feedback)</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        TEST
                    </div>
                </Modal.Body>
                <div>
                    <button style={{color: 'cornflowerblue'}}>SUBMIT</button>
                    <button style={{color: 'white'}}>GO BACK</button>
                </div>
            </Modal>
        );
    }
}