import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Formation442 from "../components/Formation442"
import Formation343 from "../components/Formation343"
import Formation433 from "../components/Formation433"

import Field from "../components/Field"
import Formation352 from "../components/Formation352"

export default function Home({currentImage}) {

    const [formations, setFormations] = useState()
    const [selection, setSelection] = useState()

    const images = [
        '/images/bg2.webp',
        '/images/bg5.webp',
        '/images/bg4.webp',
        '/images/bg3.webp',
    ]

    useEffect(() => {
        // http://localhost:4040/
        // https://api.lineupwiz.soccer:4040/
        fetch('https://lineupwiz-api-fb.web.app/formations')
            .then(res => res.json())
            .then(data => setFormations(data))
            .catch(console.error)
    }, [])

    return (
        <>
            <div id='test'
                 style={{
                    backgroundImage: `url('${images[currentImage]}')`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                  }}>
                <Container className="field-container">
                    <Row className="text-white">
                        <Col sm={12}>
                            {/* <h3 className="text-center">Choose a formation</h3> */}
                            <select className="form-select custom-select"
                                aria-label="Default select example"
                                onChange={e => setSelection(e.target.value)}>
                                < option className="custom-select3" value="" > Choose a formation </option>
                                {formations?.map(formation => (
                                    <option className="custom-select3" key={formation._id}
                                        value={formation.formation}> {formation.formation} </option>)
                                )}
                            </select>
                        </Col>
                      
                        <div className="formations-wrapper">
                            <Col className="formations" sm={12}>
                                {!selection
                                    ? < Field />
                                    :  (selection === "4-4-2" && <Formation442 />)
                                    || (selection === "4-3-3" && <Formation433 />)
                                    || (selection === "3-4-3" && <Formation343 />)
                                    || (selection === "3-5-2" && <Formation352 />)
                                }
                            </Col>
                        </div>                        
                    </Row>
                </Container>
            </div>
        </>
    )
}