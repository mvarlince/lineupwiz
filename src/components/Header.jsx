import { Col, Container, Row } from "react-bootstrap"

export default function Header(){
    return (
        <>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col  className="sir-column header ">
                    <img className="head-pic" src="/images/logo.png" alt="lineupWiz" />
                </Col>
            </Row>

        </Container>
        </>
    )
}