import { Container } from "react-bootstrap";


export default function HeaderText({currentImage, setCurrentImage}) {

    const handleClick = () => {
        setCurrentImage((currentImage + 1) % images.length);
      }
      
      const images = [
        '/images/ronaldo.png',
        '/images/pulisic.png',
       // '/images/modric.png',
        '/images/pogba.png',
        'images/messi.png',
        '/images/neymar.png',
        '/images/mbappe.png'
    ]

    return (
        <>
            <header className="header-gradient">
                <Container>
                    <h1 className="header-title">Lineupwiz<img src="/images/socc2.gif" onClick={handleClick}/></h1>
                </Container>
            </header>

        </>
    )
}