
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import PlayerCard from "./PlayerCard"

export default function Formation352() {

    const formationStyle = {
        backgroundImage: `http://localhost:3000/images/field.png`, //set the backround image
        backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        minHeight: '70vh', //set a minimum height to ensure the image covers the full screen
        //   display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        transform: 'scale(50%)',
        position: 'relative',
        top: '-25%'
    }

    const rowStyle = {
        marginBottom: '250px', //add margin between rows
    }

    const rowStyle2 = {
        marginBottom: '100px', //add margin between rows
    }

    // const buttonStyle = {
    //     borderRadius: "50%",
    //     width: "50px", /* adjust size as needed */
    //     height: "50px",
    //     // display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     //   backgroundColor: 'yellow'
    // }

    const [players, setPlayers] = useState([])
    const formation = 352

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
        <div className="field-div" style={formationStyle}>
            <Container className="field-container2">

                <Row style={rowStyle}>
                    <Col sm={6} md={6} className="text-center">
                        <PlayerCard position="LF"
                            player={players.find(p => p._id === 'LF')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={6} md={6} className="text-center">
                        <PlayerCard position="RF"
                            player={players.find(p => p._id === 'RF')}
                            toggleDone={toggleDone} />
                    </Col>
                </Row>

                <Row style={rowStyle2}>
                    <Col sm={6} md={6} className="text-center">
                        <PlayerCard position="CM1"
                            player={players.find(p => p._id === 'CM1')}
                            toggleDone={toggleDone} />
                    </Col>

                    <Col sm={6} md={6} className="text-center">
                        <PlayerCard position="CM3"
                            player={players.find(p => p._id === 'CM3')}
                            toggleDone={toggleDone} />
                    </Col>
                </Row>

                <Row style={rowStyle}>

                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="LM"
                            player={players.find(p => p._id === 'LM')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="CM2"
                            player={players.find(p => p._id === 'CM2')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="RM"
                            player={players.find(p => p._id === 'RM')}
                            toggleDone={toggleDone} />
                    </Col>

                </Row>



                <Row style={rowStyle}>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="LB"
                            player={players.find(p => p._id === 'LB')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="CB"
                            player={players.find(p => p._id === 'CB')}
                            toggleDone={toggleDone} />
                    </Col>
                    <Col sm={4} md={4} className="text-center">
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