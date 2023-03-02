import { Button, Container, Row } from "react-bootstrap"
import field from "../assets/images/field.webp"

export default function Field ({players}) {

    const play442 = [ 
                                            [0,1,0,0,{position: 'GK'}], 

    [1,0,0,0,{position: 'LB'}], [0,1,0,0,{position: 'CB1'}], [0,0,1,0,{position: 'CB2'}], [0,0,0,1,{position: 'RB'}], 

    [1,0,0,0,{position: 'LM'}], [0,1,0,0,{position: 'CM1'}], [0,0,1,0,{position: 'CM2'}], [0,0,0,1,{position: 'RM'}],

                                [0,1,0,0,{position: 'CF1'}], [0,0,1,0,{position: 'CF2'}]
                        ]
    
    console.log({players})
    return(
        <>
        <Container>
            {play442.map( row => (
                    <Button col={row}> {row[0]} </Button>
                    ) )}
        </Container>
            
            <img className="field" 
                    src={field} 
                        alt="empty field with view from above"
            />
        </>
    )
}