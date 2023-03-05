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
        const [player, setPlayer] = useState("default")
        const [jersey, setJersey] = useState("default")

        const handleClick = () => {
            setShowModal(true)

        }

    return (
        <div style={formationStyle}>
              <PlayerModal 
                player={player}
                setPlayer={setPlayer}
                jersey={jersey}
                setJersey={setJersey}
                showModal={showModal}
                setShowModal={setShowModal}
             />
            <Container className="field-container2">
                <Row style={rowStyle}>

                    <Col sm={4} md={4} className="text-center"> </Col>
                    <Col sm={4} md={4} className="text-center">
                        <Button onClick={handleClick} 
                                style={buttonStyle} 
                                > 
                                LF </Button>
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <Button> RF </Button>
                    </Col>
                </Row>

                <Row style={rowStyle}>
                    <Col sm={3} md={3} className="text-center">
                        <Button style={buttonStyle}> LM </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button style={buttonStyle}> CM1 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button style={buttonStyle}> CM2 </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button style={buttonStyle}> RM </Button>
                    </Col>
                </Row>

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