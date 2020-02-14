import React from "react";
import "./style.css";
import Consumer from "../../configContext";

const Game = props => {

    return (
        <Consumer>
            {context => {
                return (
                    <div className="container">



                        <div className="card" >
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-header">
                                {context.currentUser}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>


















                    </div>
                )
            }}


        </Consumer>

    )

}


export default Game;