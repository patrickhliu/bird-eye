import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Args {
   showModal: boolean,
}

const questionModal = () => {
    //console.log('pat', showModal);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>

        <Modal show={show} onHide={handleClose} keyboard={true}>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>Modal Content...</Modal.Body>

            <Modal.Footer>
                <Button>Close</Button>
                <Button>Save changes</Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default questionModal;