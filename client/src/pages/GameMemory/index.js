import React, { useState } from "react";
import GAMEAPI from "./API";
import Tile from "./Tile"
import "./style.css";
import Consumer from "../../configContext.js";
import Game from "./Game";
import API from "../../utils/API"



function App() {
    const [gameState, setGameState] = useState({
        theme: "",
        result: [],
        gameOver: false,
        clicked: {},
        playing: false,
        coins: 0
    });

    function search(e) {
        gameState.theme = e.target.value;
        GAMEAPI.searchTiles(gameState.theme)
            .then(res => {
                gameState.result = res.data.data;
                setGameState(
                    { ...gameState }
                );
                console.log("GAME STATE AFTER API SEARCH")
                console.log(gameState);
            });
    }

    function click(index) {
        console.log("GAME STATE BEFORE CLICK", gameState);
        if (gameState.clicked[index]) {
            console.log("GAME OVER");
            gameState.gameOver = true;
            setGameState(
                { ...gameState }
            );
        } else {
            console.log("KEEP PLAYING");
            gameState.coins++;
            gameState.clicked[index] = true;
            gameState.result = shuffle(gameState.result);
            setGameState(
                { ...gameState }
            );
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
        console.log("RESULT", gameState.result);
        if (gameState.result.length > 0) {
            gameState.playing = true;
            setGameState(
                { ...gameState }
            );
            console.log("GAME STATE AFTER START GAME", gameState);
        }
    }

    function resetState() {
        gameState.theme = "";
        gameState.gameOver = false;
        gameState.playing = false;
        gameState.coins = 0;
        gameState.clicked = {};
        gameState.result = [];

        setGameState(
            { ...gameState }
        );
        console.log("GAME STATE AFTER RESETING GAME", gameState);
    }


    return (
        <Consumer>

            {context => {

                function resetGame() {
                    if (gameState.gameOver && context.loggedIn) {
                        // const coins = Object.keys(gameState.clicked).length;
                        console.log("COINS EARNED", gameState.coins);
                        context.currentUser.coins += gameState.coins;
                        resetState();
                        console.log(context.currentUser.coins);
                        API.updateCoins(context.currentUser)
                            .then(res => console.log("UPDATE USER RES", res));
                    }
                    resetState();

                }

                function home() {
                    if (!gameState.playing) {
                        return (

                            <div>
                                <h1>Test your memory skills with this game</h1>
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
