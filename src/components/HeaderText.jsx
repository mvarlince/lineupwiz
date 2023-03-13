import { Container } from "react-bootstrap";


export default function HeaderText({currentImage, setCurrentImage}) {

    const handleClick = () => {
        setCurrentImage((currentImage + 1) % images.length);
        console.log(currentImage)
      }
      
      const images = [
        '/images/bg2.webp',
        '/images/bg3.webp'
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