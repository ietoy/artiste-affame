import React from "react";
import Tile from "./Tile"


function Game({ gameState, click, resetGame, loggedIn }) {


    function checkGameStatus() {
        if (gameState.gameOver) {
            if (loggedIn) {
                // addCoins();
                return (
                    <div>
                        <h1 className="display-4 mb-3">GAME OVER!! You Earned ${gameState.coins}!</h1>
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
                        <h1 className="display-4 mb-3">GAME OVER!! You Scored {gameState.coins} points!</h1>
                        <div className="row">

                            <button onClick={resetGame} className="btn btn-warning btn-lg" role="button">
                                Play Again <i className="fas fa-gamepad"></i>
                            </button>
                        </div>
                    </div>
                );
            }
        } else if (gameState.playing) {
            return (

                <div>
                    <h1 className="display-4 mb-3">Click each image only once... Go!</h1>
                    <div className="row">
                        {gameState.result.map((gif, i) => (
                            <Tile key={i} click={click} image={gif.images.original.url} />
                        ))}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {checkGameStatus()}
        </div>
    );
}

export default Game;