import { useState } from "react";
import { Button } from "react-bootstrap";
import PlayerModal from "./PlayerModal";

export default function PlayerCard({ toggleDone, position, player }){

    const buttonStyle = {
        borderRadius: "50%",
        width: "50px", /* adjust size as needed */
        height: "50px",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
    }

    const [playerName, setPlayerName] = useState("")
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
                playerName={playerName}
                setPlayerName={setPlayerName}
                jersey={jersey}
                setJersey={setJersey}
                toggleDone={toggleDone}
                player={player}
                toggleDoneFunction={toggleDone}
                />
            <Button style={buttonStyle}  onClick={handleClick}> 
                   {position} 
            </Button>
            {player?.name && <p className="text-white">{player.name}</p>}
           {player?.jersey && <p className="text-white"> {player.jersey} </p>}

        </>
    )
}