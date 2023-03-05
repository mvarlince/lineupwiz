import { Container, Row, Col, Button } from "react-bootstrap"

export default function Field ({players}) {
    
   
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
   
    return(     
      <div style={formationStyle}>
      <Container className="field-container2">
          <Row style={rowStyle}>

              <Col sm={4} md={4} className="text-center"> </Col>
              <Col sm={4} md={4} className="text-center">
              </Col>
              <Col sm={4} md={4} className="text-center">
              </Col>

          </Row>
              <Row style={rowStyle}>
              <Col sm={3} md={3} className="text-center">
              </Col>
              <Col sm={3} md={3} className="text-center">
              </Col>
              <Col sm={3} md={3} className="text-center">
              </Col>
              <Col sm={3} md={3} className="text-center">
              </Col>

          </Row>
              <Row style={rowStyle}>
              <Col sm={3} md={3} className="text-center">
              </Col>
              <Col sm={3} md={3} className="text-center">
              </Col>
              <Col sm={3} md={3} className="text-center">
              </Col>
              <Col sm={3} md={3} className="text-center">
              </Col>
          </Row>

          <Row style={rowStyle}>
              <Col sm={12} md={12} className="text-center">
              </Col>
          </Row>
          
      </Container>
  </div>
    )
}