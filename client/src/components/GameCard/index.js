// IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";


// This component generates a button representing a game that the user can play in the arcade
// These components will generate for each game available in the arcade
// This component is required by the Arcade page

const GameCard = (props) => {

    return (

        <div className="card">
            <div className="card-image">
                <img src={props.game.image} />
            </div>
            <div className="card-content">
                <h3>{props.game.name}</h3>
                <p>{props.game.description}</p>
            </div>
            <div className="card-action">
                <Link to={props.game.link}>Play</Link>
            </div>
        </div>

    )

}

export default GameCard;