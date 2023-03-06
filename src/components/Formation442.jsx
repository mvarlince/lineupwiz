import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import PlayerModal from "./PlayerModal"

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
          marginBottom: '250px' //add margin between rows
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

        const [showModal, setShowModal] = useState(false)
        const [label, setLabel] = useState("")
        const [player, setPlayer] = useState([])

        // may not need
        const [playerName, setPlayerName] = useState("name")
        const [jersey, setJersey] = useState("jersey")

        const handleClick = () => {
            setShowModal(true)
        }

        useEffect( () => {
            fetch('http://localhost:4040/players')
            .then(res => res.json())
            .then(data => setPlayer(data))
            .catch(console.error)
        },[] )

        // console.log(player)

    return (
        <div className="field-div" style={formationStyle}>

              <PlayerModal 
                showModal={showModal}
                setShowModal={setShowModal}
                label={label}
                setLabel={setLabel}
                playerName={playerName}
                setPlayerName={setPlayerName}
                jersey={jersey}
                setJersey={setJersey} />

            <Container className="field-container2">
                <Row style={rowStyle}>

                    <Col sm={4} md={4} className="text-center"> </Col>
                    <Col sm={4} md={4} className="text-center">
                        <Button onClick={handleClick} 
                                style={buttonStyle} 
                                > 
                                {label}
                        </Button>
                        <p className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}> {player.name} </p>
                        <p className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}> {jersey} </p>
                        
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <Button onClick={handleClick}> RF </Button>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick}  style={buttonStyle} > LM </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick}  style={buttonStyle}> CM1 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick}  style={buttonStyle}> CM2 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick}  style={buttonStyle}> RM </Button>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick} > LB </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick} > CB1 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick} > CB2 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button onClick={handleClick} > RB </Button>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={12} md={12} className="text-center">
                        <Button onClick={handleClick}> {label} </Button>
                        <p className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}> {playerName} </p>
                        <p className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}> {jersey} </p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}