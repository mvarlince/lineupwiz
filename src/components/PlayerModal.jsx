import { useState } from "react"
import { Button, Form, TextInput } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'

export default function PlayerModal({ showModal, setShowModal, label, setLabel, playerName, setPlayerName, jersey, setJersey, }){

    const handleClose = () => {
        setShowModal(false)
    }

    // const handleSave = () => {
    //     console.log(playerName)
    //     console.log(jersey)
    //     setShowModal(false)
    // }

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
                        <Form.Label> Postion </Form.Label>
                        <Form.Control type="text" placeholder="3 characters max" value={label} onChange={(e) => setLabel(e.target.value)}/>
                        <Form.Label> Player name </Form.Label>
                        <Form.Control type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                        <Form.Label> Jersey Number </Form.Label>
                        <Form.Control type="number" value={jersey} onChange={(e) => setJersey(e.target.value)} />
                    </Form.Group>
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