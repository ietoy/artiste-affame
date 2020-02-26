import React, { useState } from "react";
import Consumer from "../../configContext.js";
import API from "../../utils/API"



function App() {
    const [gameState, setGameState] = useState({
        gameOver: false,
        playing: false,
        coins: 0
    });

    function startGame() {
        if (gameState.result.length > 0) {
            setGameState(state => ({
                ...state,
                playing: true
            }));
            console.log("GAME STATE AFTER START GAME", gameState);
        }
    }

    function resetState() {
        setGameState(state => ({
            ...state,
            gameOver: false,
            playing: false,
            coins: 0
        }));
        console.log("GAME STATE AFTER RESETING GAME", gameState);
    }


    return (
        <Consumer>

            {context => {

                function resetGame() {
                    if (gameState.gameOver && context.loggedIn) {
                        console.log("COINS EARNED", gameState.coins);
                        context.addCoins(gameState.coins);
                        API.updateUser(context.currentUser)
                            .then(res => {
                                console.log("UPDATE USER RES", res.data);
                            });
                    }
                    resetState();
                }



                return (

                    <div className="container">

                        <h1>Other Game</h1>

                    </div>


                )
            }}
        </Consumer>
    )



}

export default App;
