import { Container } from "react-bootstrap"
import logo from "../assets/images/logo.png"

export default function Header(){
    return (
        <>
        <Container>
            <div className="header-1 width={150}">
                <img class="img-responsive" src={logo} alt="lineupWiz" />
            </div>
        </Container>
        </>
    )
}