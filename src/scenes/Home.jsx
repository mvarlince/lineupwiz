import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import Field from "../components/Field";

export default function Home() {

    const [formations, setFormations] = useState()


    useEffect( () => {
        fetch('http://localhost:4040/formation')
        .then(res => res.json())
        .then(data => setFormations(data))
        .catch(console.error)
    },[] )

    return (
        <>
        <Container>
            <Row>
                <Col md={6} sm={6}> 
                    <h2>Choose a formation</h2>

                    <select className="form-select" 
                            aria-label="Default select example">

                        {formations?.map( formation => (
                                // key={formation.id}>
                                    <option value='1'> {formation.formation} </option>
                                    )
                             )}
                    </select>
                    <Button >
                        Next
                    </Button>
                </Col>

                <Col md={6} sm={6}>
                     <Field /> 
                </Col>
            </Row>
        </Container>
        
        </>
    )
}