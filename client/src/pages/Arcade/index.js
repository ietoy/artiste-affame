// IMPORT REACT
import React from "react";
import GameCard from "../../components/GameCard";
import Consumer from "../../configContext.js";

const Arcade = () => {


    return (
        <Consumer>

            {context => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col s6">
                                <GameCard game={
                                    {
                                        name: "Memory",
                                        link: "/arcade/memory",
                                        image: "https://store-images.s-microsoft.com/image/apps.14071.14444766800945903.ce1add5c-079a-4ada-ad7e-3edf619f02e2.4815b388-2319-4db8-a1f8-05be1c6cc954?mode=scale&q=90&h=300&w=200",
                                        description: "Test you memory"
                                    }}></GameCard>
                            </div>
                            <div className="col s6">
                                <GameCard game={
                                    {
                                        name: "OtherGame",
                                        link: "/arcade",
                                        image: "https://store-images.s-microsoft.com/image/apps.14071.14444766800945903.ce1add5c-079a-4ada-ad7e-3edf619f02e2.4815b388-2319-4db8-a1f8-05be1c6cc954?mode=scale&q=90&h=300&w=200",
                                        description: "Game Number 2"
                                    }}></GameCard>
                            </div>
                        </div>
                    </div>
                )

            }}


        </Consumer>
    )
}

export default Arcade;