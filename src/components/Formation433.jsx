import { useState, useEffect } from "react"

import { Container, Row, Col } from "react-bootstrap"
import PlayerCard from "./PlayerCard"
import PlayerModal from "./PlayerModal"

export default function Formation433() {

    const fieldContainer2 = {
        backgroundImage: 'url("/images/field.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // border: 'red solid' (commented out)
    };

    const formationStyle = {
        // 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        //set a minimum height to ensure the image covers the full screen

        // width: 'cover',       
        //  minHeight: '70vh',
        display: 'flex',
        // justifyContent: 'center',
        // width: "cover",
        alignItems: 'center',
        paddingTop: '20px',
        transform: 'scale(45%)',
        position: 'relative',
        top: '-27%'
    }

    const rowStyle = {
        marginBottom: '250px', //add margin between rows
    }

    const [players, setPlayers] = useState([])
    const formation = 433

    useEffect(() => {
        fetch(`https://api.lineupwiz.soccer:4040/formation/${formation}`)
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(console.error)
    }, [])

    const toggleDone = (name, jersey, player) => {
        fetch(`https://api.lineupwiz.soccer:4040/players/${formation}/${player._id}`, {
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
        <> <h6 className="field-component text-white text-bold text-center" > Click on position to edit player name and number </h6>
            <div style={formationStyle}>

                <Container style={fieldContainer2} className="field-container2">
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
                        <Row style={rowStyle}>
                            <Col sm={4} md={4} className="text-center">
                                <PlayerCard position="LM"
                                    player={players.find(p => p._id === 'LM')}
                                    toggleDone={toggleDone} />

                            </Col>
                            <Col sm={4} md={4} className="align-items-center text-center">
                                <PlayerCard position="CM"
                                    player={players.find(p => p._id === 'CM')}
                                    toggleDone={toggleDone} />

                            </Col>
                            <Col sm={4} md={4} className="align-items-center text-center">
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
        </>
    )
}