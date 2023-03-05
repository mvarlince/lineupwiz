import { useState } from "react"
import { Button, Form, TextInput } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'

export default function PlayerModal({player, setPlayer, jersey, setJersey, showModal, setShowModal}){

    const handleShow = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleSave = () => {
        console.log(player)
        console.log(jersey)
        setShowModal(false)
    }

    // onChange
    // const handleChange = (event) => {
    //     event.preventDefault()
    // }

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
            <Modal.Body>
                <h2 className="text-center"> Player Info </h2>
                <Form> 
                    <Form.Group>
                        <Form.Label> Enter Player Name </Form.Label>
                        <Form.Control type="text" value={player} onChange={(e) => setPlayer(e.target.value)}/>
                        <Form.Label> Enter Jersey Number </Form.Label>
                        <Form.Control type="text" value={jersey} onChange={(e) => setJersey(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onSubmit={handleSave}>
                    Save
                </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}