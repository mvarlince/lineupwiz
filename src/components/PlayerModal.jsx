import { useState } from "react"
import { Button, Form, TextInput } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'

export default function PlayerModal({ player, toggleDoneFunction, showModal, setShowModal, playerName, setPlayerName, jersey, setJersey, }){

    const handleDone= () => {
        toggleDoneFunction(playerName, jersey)
        console.log(playerName)
        console.log(jersey)
    }

    const handleClose = () => {
        setShowModal(false)
    }


    return (
        <>
            <Modal show={showModal} onHide={handleDone}>
                <Modal.Body>
                    <h2 className="text-center"> Player </h2>
                    <p className="text-center"> Player: {player?.name} </p>
                    <p className="text-center"> Position: {player?._id} </p>
                    <Form> 
                        <Form.Group>
                            <Form.Label> Player name </Form.Label>
                            <Form.Control type="text"  value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                            <Form.Label> Jersey Number </Form.Label>
                            <Form.Control type="number" value={jersey} onChange={(e) => setJersey(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> DONE </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}