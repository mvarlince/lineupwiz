import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Formation442 from "../components/Formation442"
import Formation343 from "../components/Formation343"
import Formation433 from "../components/Formation433"

export default function Home() {

    const [formations, setFormations] = useState()
    const [selection, setSelection] = useState()

    console.log(formations)
    console.log(selection)

    useEffect( () => {
        fetch('http://localhost:4040/formation')
        .then(res => res.json())
        .then(data => setFormations(data))
        .catch(console.error)
    },[] )

    return (
        <>
        <Container className="field-container">
            <Row className="text-white">
                    <h2>Choose a formation</h2>

                    <select className="form-select" 
                            aria-label="Default select example"
                            // value={"ser"}
                            onChange={ e => setSelection(e.target.value)}
                             >
                            {formations?.map( formation => (
                                    <option key={formation._id} value={formation.formation}> {formation.formation} </option>)
                             )
                        }                           
                    </select>
                    {/* <Button >
                        Next
                    </Button> */}
            </Row>
            
            <Row>
                { selection === "4-4-2" && <Formation442 /> }
                { selection === "3-4-3" && <Formation343 /> }
                { selection === "4-3-3" && <Formation433 /> }
            </Row>
        </Container>
        
        </>
    )
}