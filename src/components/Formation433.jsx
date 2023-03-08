import { useState, useEffect } from "react"

import { Container, Row, Col, Button } from "react-bootstrap"
import PlayerCard from "./PlayerCard"
import PlayerModal from "./PlayerModal"

export default function Formation433 (){
   
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
        
        
        useEffect( () => {
            fetch('http://localhost:4040/players/433')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(console.error)
        },[] )

        const toggleDone = (playerName, jersey, player) => {
            fetch(`http://localhost:4040/players/442/${player._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({playerName, jersey})
            })
            .then(res => res.json())
            .then()
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
                    <PlayerCard position="LF" player={players.find(p => p._id === 'LF')} setPlayerName={setPlayerName} setJersey={setJersey} setShowModal={setShowModal}/>
                     </Col>
                    <Col sm={4} md={4} className="text-center">
                        <PlayerCard position="CF" player={players.find(p => p._id === 'CF')} setPlayerName={setPlayerName} setJersey={setJersey} setShowModal={setShowModal}/>
                        
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                    <PlayerCard position="RF" player={players.find(p => p._id === 'RF')} setPlayerName={setPlayerName} setJersey={setJersey} setShowModal={setShowModal}/>
                    </Col>
                </Row>
                
                <div>
                <Row style={rowStyle3}>
                    <Col style={colStyle} sm={4} md={4} className="text-center">
                    <PlayerCard position="LM" player={players.find(p => p._id === 'LM')} setPlayerName={setPlayerName} setJersey={setJersey} setShowModal={setShowModal}/>

                    </Col>
                    <Col style={colStyle} sm={4} md={4} className="align-items-center text-center">
                    <PlayerCard position="CM" player={players.find(p => p._id === 'CM')} setPlayerName={setPlayerName} setJersey={setJersey} setShowModal={setShowModal}/>

                    </Col>
                    <Col style={colStyle} sm={4} md={4} className="align-items-center text-center">
                        <Button style={buttonStyle}> RM </Button>
                    </Col>
                </Row>
                </div>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <Button> LB </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button> CB1 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button> CB2 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button> RB </Button>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={12} md={12} className="text-center">
                        <Button>GK</Button>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}