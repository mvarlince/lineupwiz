import { useState } from "react";
import { Button } from "react-bootstrap";
import PlayerModal from "./PlayerModal";

export default function PlayerCard({ toggleDone, position, player }) {

    const buttonStyle = {
        borderRadius: "50%",
        width: "100px", /* adjust size as needed */
        height: "100px",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
        fontSize: "2em",
        fontWeight: "800",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" 
    } 

    const nameJersey = {
        fontSize: "3em",
        marginBottom: "2px"
      }

    const [name, setName] = useState("")
    const [jersey, setJersey] = useState()
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <>
            <PlayerModal
                showModal={showModal}
                setShowModal={setShowModal}
                name={name}
                setName={setName}
                jersey={jersey}
                setJersey={setJersey}
                toggleDone={toggleDone}
                player={player}
                toggleDoneFunction={toggleDone}
            />
            <Button style={buttonStyle} onClick={handleClick}>
                {position}
            </Button>
            {player?.name && <p style={nameJersey} className="text-white">{player.name}</p>}
            {player?.jersey && <p style={nameJersey} className="text-white"> {player.jersey} </p>}
        </>
    )
}