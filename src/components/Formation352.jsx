
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import PlayerCard from "./PlayerCard"

export default function Formation352() {

    const fieldContainer2 = {
        backgroundImage: 'url("/images/field.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // border: 'red solid' (commented out)
      };

    const formationStyle = {
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
    const formation = 352

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
        <div className="field-div" style={formationStyle}>
            <Container style={fieldContainer2}>

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

                <Row style={rowStyle}>
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