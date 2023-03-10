import { Button, Form } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'

export default function PlayerModal({ player, toggleDoneFunction, showModal, setShowModal, name, setName, jersey, setJersey, }) {

    const handleDone = () => {
        toggleDoneFunction(name, jersey, player)
        console.log(name)
        console.log(jersey)
        setShowModal(false)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Body>
                    <h2 className="text-center"> Player </h2>
                    <p className="text-center"> Player: {player?.name} </p>
                    <p className="text-center"> Position: {player?._id} </p>
                    <Form>
                        <Form.Group>
                            <Form.Label> Player name </Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <Form.Label> Jersey Number </Form.Label>
                            <Form.Control type="number" value={jersey} onChange={(e) => setJersey(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDone}> DONE </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}