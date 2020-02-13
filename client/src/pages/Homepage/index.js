import React from "react";
import "./style.css";
import Consumer from "../../configContext";

const Game = props => {

    return (
        <Consumer>
            {context => {
                return (
                    <div className="container">



                        <div className="card" style="width: 18rem;">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>


















                    </div>
                )
            }}


        </Consumer>

    )

}


export default Game;