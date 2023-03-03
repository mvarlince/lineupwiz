import { Container, Row, Col, Button } from "react-bootstrap"

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
          border: "red solid"
        }
        const rowStyle3 = {
            marginBottom: '250px', //add margin between rows
            border: "red solid",

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

    return (
        <div style={formationStyle}>
            <Container className="field-container2">
                <Row style={rowStyle}>

                    <Col sm={3} md={3} className="text-center"> </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button style={buttonStyle}> LF </Button>
                    </Col>
                    <Col sm={3} md={3} className="text-center">
                        <Button> RF </Button>
                    </Col>
                </Row>
                
                <div>
                <Row style={rowStyle3}>
                    <Col style={colStyle} sm={3} md={3} className="text-center">
                        <Button style={buttonStyle}> CM1 </Button>
                    </Col>
                    <Col style={colStyle} sm={3} md={3} className="align-items-center text-center">
                        <Button style={buttonStyle}> CM2 </Button>
                    </Col>
                    <Col style={colStyle} sm={3} md={3} className="align-items-center text-center">
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