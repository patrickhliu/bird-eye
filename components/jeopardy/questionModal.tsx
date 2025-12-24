import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Args {
    isOpen: boolean,
    question: any,
    closeModal: any,
}

const questionModal:React.FC<Args> = ({ isOpen, question, closeModal }) => {
    return (
    <>
        <Modal centered show={ isOpen } keyboard={ true } backdrop="static" animation={ true } style={{ visibility:"visible", }}>
            <Modal.Header>
                <Modal.Title>{ question.category } - ${ question.value }</Modal.Title>
            </Modal.Header>

            <Modal.Body>{ question.question }</Modal.Body>

            <Modal.Footer>
                <Button onClick={ closeModal }>Close</Button>
                {/* <Button>Save changes</Button> */}
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default questionModal;