import React from "react";
import "./style.css";
import Consumer from "../../configContext";

const Game = props => {

    return (
        <Consumer>
            {context => {
                return (
                   <h1>helo world</h1>
                )
            }}


        </Consumer>

    )

}


export default Game;