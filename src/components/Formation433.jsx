import { useState, useEffect } from "react"

import { Container, Row, Col } from "react-bootstrap"
import PlayerCard from "./PlayerCard"
import PlayerModal from "./PlayerModal"

export default function Formation433() {

    const formationStyle = {
        backgroundImage: `http://localhost:3000/images/field.png`, //set the backround image
        backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        minHeight: '100vh', //set a minimum height to ensure the image covers the full screen
        //   display: 'flex',
        //   justifyContent: 'right',
        alignItems: 'center'
    }

    const colStyle = {
        border: "red solid",
        alignitems: "right",
        text: "center"
    }

    const rowStyle = {
        marginBottom: '250px', //add margin between rows
    }
    const rowStyle3 = {
        marginBottom: '250px', //add margin between rows
    }

    const buttonStyle = {
        borderRadius: "50%",
        width: "50px", /* adjust size as needed */
        height: "50px",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'red'
    }

    const [players, setPlayers] = useState([])
    const [playerName, setPlayerName] = useState("")
    const [jersey, setJersey] = useState()
    const [showModal, setShowModal] = useState(false)

    const formation = 433


    useEffect(() => {
        fetch(`http://localhost:4040/formation/${formation}`)
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(console.error)
    }, [])

    const toggleDone = (name, jersey, player) => {
        fetch(`http://localhost:4040/players/${formation}/${player._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, jersey })
        })
            .then(res => res.json())
            .then(setPlayers)
            .catch(console.error)
    }

    return (
        <div style={formationStyle}>

            <PlayerModal
                showModal={showModal}
                setShowModal={setShowModal}
                playerName={playerName}
                setPlayerName={setPlayerName}
                jersey={jersey}
                setJersey={setJersey}
                toggleDone={toggleDone}
                players={players}
            />

            <Container className="field-container2">
                <Row style={rowStyle}>

                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="LF"
                            player={players.find(p => p._id === 'LF')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="CF"
                            player={players.find(p => p._id === 'CF')}
                            toggleDone={toggleDone} />

                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="RF"
                            player={players.find(p => p._id === 'RF')}
                            toggleDone={toggleDone} />
                    </Col>
                </Row>

                <div>
                    <Row style={rowStyle3}>
                        <Col style={colStyle} sm={4} md={4} className="text-center">
                            <PlayerCard position="LM"
                                player={players.find(p => p._id === 'LM')}
                                toggleDone={toggleDone} />

                        </Col>
                        <Col style={colStyle} sm={4} md={4} className="align-items-center text-center">
                            <PlayerCard position="CM"
                                player={players.find(p => p._id === 'CM')}
                                toggleDone={toggleDone} />

                        </Col>
                        <Col style={colStyle} sm={4} md={4} className="align-items-center text-center">
                            <PlayerCard position="RM"
                                player={players.find(p => p._id === 'RM')}
                                toggleDone={toggleDone} />
                        </Col>
                    </Row>
                </div>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="LB"
                            player={players.find(p => p._id === 'LB')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="CB1"
                            player={players.find(p => p._id === 'CB1')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="CB2"
                            player={players.find(p => p._id === 'CB2')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="RB"
                            player={players.find(p => p._id === 'RB')}
                            toggleDone={toggleDone} />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={12} md={12} className="text-center">
                        <PlayerCard position="GK"
                            player={players.find(p => p._id === 'GK')}
                            toggleDone={toggleDone} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}