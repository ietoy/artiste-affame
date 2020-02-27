import React, { useState, useRef } from "react";
import Consumer from "../../configContext.js";
import API from "../../utils/API"
import Style from "./style.css";


function App() {
    const [gameState, setGameState] = useState({
        playing: true,
        coins: 0
    });

    const guessRef = useRef();

    function resetState() {
        setGameState(state => ({
            ...state,
            playing: true,
            coins: 0
        }));
        console.log("GAME STATE AFTER RESETING GAME", gameState);
    }

    function solve() {
        setGameState(state => ({
            ...state,
            playing: false
        }));
        var random = Math.floor(Math.random() * (21 - 15) ) + 15;;
        console.log("guessed:", guessRef.current.value, "random:", random);
        if (guessRef.current.value == random) {
            setGameState(state => ({
                ...state,
                coins: random
            }));
        }

    }


    return (
        <Consumer>

            {context => {

                function resetGame() {
                    if (context.loggedIn) {
                        console.log("COINS EARNED", gameState.coins);
                        context.addCoins(gameState.coins);
                        API.updateUser(context.currentUser)
                            .then(res => {
                                // console.log("UPDATE USER RES", res.data);
                            });
                    }
                    resetState();
                }

                function play() {
                    console.log("PLAYING?", gameState.playing);
                    if (gameState.playing) {
                        return (
                            <div>
                                <h1>Guess a number between 15 and 20</h1>
                                <input type="text"ref={guessRef}></input>

                                <div
                                    className="btn-large waves-effect waves-light col s2 offset-s1"
                                    // function in this class
                                    onClick={() => solve()}>Guess<i className="material-icons right">send</i>
                                </div>
                            </div>
                        );
                    } else {
                        if (context.loggedIn) {
                            return (
                                <div>
                                    <h2 className="display-4 mb-3">GAME OVER!! You Earned ${gameState.coins}!</h2>
                                    <div className="row">
                                        <button onClick={resetGame} className="btn btn-warning btn-lg" role="button">
                                            Add Coins <i className="fas fa-gamepad"></i>
                                        </button>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <h2 className="display-4 mb-3">GAME OVER!! You Scored {gameState.coins} points!</h2>
                                    <div className="row">

                                        <button onClick={resetGame} className="btn-large btn-warning btn-lg" role="button">
                                            Play Again <i className="fas fa-gamepad"></i>
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    }
                }

                return (

                    <div className="container">

                        {play()}

                    </div>


                )
            }}
        </Consumer>
    )



}

export default App;
