import React, { useState } from "react";
import GAMEAPI from "./API";
import Tile from "./Tile"
import "./style.css";
import Consumer from "../../configContext.js";
import Game from "./Game";
import API from "../../utils/API"



function App() {
    const [gameState, setGameState] = useState({
        result: [],
        gameOver: false,
        clicked: {},
        playing: false,
        coins: 0
    });

    function search(e) {
        console.log("SEARCHING FOR", e.target.value);
        GAMEAPI.searchTiles(e.target.value)
            .then(res => {
                console.log("API SEARCH RESULTS", res.data.data);
                setGameState(state => ({
                    ...state,
                    result: res.data.data
                }));
            });
    }

    function click(index) {
        if (gameState.clicked[index]) {
            console.log("GAME OVER");
            setGameState(state => ({
                ...state,
                gameOver: true
            }));
        } else {
            console.log("KEEP PLAYING");
            gameState.clicked[index] = true;
            setGameState(state => ({
                ...state,
                coins: state.coins+1,
                clicked: state.clicked,
                result: shuffle(gameState.result)
            }));
        }
        console.log("GAME STATE AFTER CLICK", gameState);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

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
            result: [],
            gameOver: false,
            clicked: {},
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

                function home() {
                    if (!gameState.playing) {
                        return (

                            <div>
                                <h2>Test your memory skills</h2>
                                <div className="row">

                                    <label>Select you theme</label>
                                    <select className="browser-default" onChange={search}>
                                        <option value=""></option>
                                        <option value="theoffice">The Office</option>
                                        <option value="brooklynninenine">Brooklyn Nine Nine</option>
                                        <option value="parksandrec">Parks and Recreation</option>
                                        <option value="rickandmorty">Rick And Morty</option>
                                        <option value="supernatural">Supernatural</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <button onClick={startGame} className="btn btn-warning btn-lg" role="button">
                                        Get Playing <i className="fas fa-gamepad"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                }

                return (

                    <div className="container">

                        {home()}

                        <Game gameState={gameState} click={click} resetGame={resetGame} loggedIn={context.loggedIn} />


                    </div>


                )
            }}
        </Consumer>
    )



}

export default App;
