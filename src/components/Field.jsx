import { Container, Row, Col, Button } from "react-bootstrap"

export default function Field () {

  const fieldContainer2 = {
    backgroundImage: 'url("/images/fieldfull.webp")',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    // border: 'red solid'
    borderRadius: '1%',
    boxShadow: '0px 0px 20px rgba(35, 216, 59, 1)'
  };

  const formationStyle = {
    backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
     //set a minimum height to ensure the image covers the full screen    
    //  minHeight: '70vh',
      display: 'flex',
    // justifyContent: 'center',
    // width: "cover",
    alignItems: 'center',
    paddingTop: '20px',
    transform: 'scale(70%)',
    position: 'relative',
    top: '-12%',
    // border: 'red solid'
}

const rowStyle = {
    marginBottom: '250px', //add margin between rows
}
    return(     
      <div style={formationStyle}>
      <Container style={fieldContainer2}>
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
              <Col sm={3} md={3} className="text-center">
              </Col>
          </Row>
          <Row> 
            <h3 className="text-white text-center ">⚽️</h3>
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