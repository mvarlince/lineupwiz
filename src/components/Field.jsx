import { Container, Row, Col, Button } from "react-bootstrap"

export default function Field ({players}) {
    
    console.log({players})
    
    return(     
        <Container className="field-container">
            <Row sm={8}>
                <Col sm={8} className="field">
                    <Row >
                        <Col>&nbsp;</Col>   
                        <Col> <Button> LW </Button> </Col>   
                        <Col><Button> RW </Button></Col>   
                        <Col>&nbsp;</Col>
                    </Row>
                    
                    <Row>
                        <Col>  <Button> LM </Button> </Col>
                        <Col> <Button> CM1 </Button>  </Col>
                        <Col> <Button> CM2 </Button>   </Col>
                        <Col> <Button> RM </Button> </Col>
                    </Row>

                    <Row>
                        <Col> <Button> LB </Button> </Col>
                        <Col> <Button> CB1 </Button> </Col>
                        <Col> <Button> CB2 </Button></Col>
                        <Col> <Button> RB </Button>  </Col>
                    </Row>

                    <Row>
                        <Col> &nbsp; </Col>
                        <Col> &nbsp; </Col>
                        <Col> <Button> GK </Button> </Col>
                        <Col> &nbsp; </Col>
                        <Col> &nbsp; </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}