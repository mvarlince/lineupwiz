import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import PlayerCard from "./PlayerCard"
import Field from "./Field"

export default function Formation442 (){
   
        const formationStyle = {
          backgroundImage: `http://localhost:3000/images/field.png`, //set the backround image
          backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
          minHeight: '100vh', //set a minimum height to ensure the image covers the full screen
        //   display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '50px'
        }
        
        const rowStyle = {
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
        // const [playerName, setPlayerName] = useState("")
        // const [jersey, setJersey] = useState()  

        
        useEffect( () => {
            fetch('http://localhost:4040/players/442')
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

        // { !players  
        //     ? <Field />
        //     : <p> ser </p>}


        <div className="field-div" style={formationStyle}>



            <Container className="field-container2">
                <Row style={rowStyle}>

                    <Col sm={3} md={3} className="text-center">  </Col>
                    <Col sm={3} md={3}  className="text-center">
                        <PlayerCard position="LF" 
                                        player={players.find(p => p._id === 'LF')} 
                                            toggleDone = {toggleDone}
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="RF" 
                                        player={players.find(p => p._id === 'RF')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center"> </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="LM" 
                                        player={players.find(p => p._id === 'LM')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="CM1" 
                                        player={players.find(p => p._id === 'CM1')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="CM2" 
                                        player={players.find(p => p._id === 'CM2')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                        />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="RM" 
                                        player={players.find(p => p._id === 'RM')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                        />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="LB" 
                                        player={players.find(p => p._id === 'LB')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="CB1" 
                                        player={players.find(p => p._id === 'CB1')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="CB2" 
                                        player={players.find(p => p._id === 'CB2')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                    />
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <PlayerCard position="RB" 
                                        player={players.find(p => p._id === 'RB')} 
                                            // setPlayerName={setPlayerName} 
                                            //     setJersey={setJersey} 
                                            //         setShowModal={setShowModal}
                                                        />
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={12} md={12} className="text-center">
                        <PlayerCard position="GK" 
                                        player={players.find(p => p._id === 'GK')} 
                                                // setPlayerName={setPlayerName} 
                                                //     setJersey={setJersey} 
                                                //         setShowModal={setShowModal}
                                                        />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}