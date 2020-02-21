import React, { useEffect } from "react";
import "./style.css";
import Consumer from "../../configContext";
import API from "../../utils/API";
import DashBtn from "../../components/DashBtn"

const Game = props => {

    const apiTest = () => {
        console.log("BEGGINING API TEST");
        //LOGIN USERNAME TEST
        var user = {
            username: "kqarlos",
            email: "kqarlos@hotmail.com",
            password: "password",
        }
        // API.login(user).then(res => {
        //     console.log("USER LOGIN NO SIGNUP");
        //     console.log(user);
        // }).catch(err => {
        //     console.log("ERROR");
        //     console.log(err);
        // });
        // API.signup(user).then(res => {
        //     console.log("USER SIGNUP");
        //     console.log(res);
        // });
        // API.login(user).then(res => {
        //     console.log("USER LOGIN AFTER SIGNUP");
        //     console.log(res);
        // });

        //ITEMS TEST
        // var item = {
        //     name: "item#5",
        //     description: "item#5 description",
        // };
        // API.insertItem(item).then(res => {
        //     console.log("ADDING ITEM");
        //     console.log(res);
        // });

        API.getAllItems().then(res => {
            console.log("GETTING ALL ITEMS");
            console.log(res);
        })

        //item#1, item#3, item#5
        var cart = [
            { _id: "5e4b6f0555340530a0a90162", amount: 1 },
            { _id: "5e4b70276a02525e10b8650e", amount: 1 },
            { _id: "5e4b8ad9853a1821dcd0e130", amount: 1 }
        ];

        // API.addItems(cart, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("ADDING ITEMS");
        //     console.log(res);
        // });

        // var itemID = {_id: "5e4b6f0555340530a0a90162"}
        //   API.useItem(itemID, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("USING ITEMS");
        //     console.log(res);
        // });

        //PAINTING TEST
        var painting = {
            paintingName: "Painting #1",
            painter: "5e4b8c5d2ce57e068478af05",
            likes: 0,
            value: 0
        }

        // API.addPainting(painting, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("ADDING PAINTING");
        //     console.log(res);
        // });

        API.getGallery().then(res => {
            console.log("GETTING GALLERY");
            console.log(res);
        });

    }

    useEffect(() => {
        console.log("LOADED!");
        apiTest();

    }, []);

    return (
        <Consumer>
            {context => {


                function getDashboard() {
                    if (context.loggedIn) {
                        return (

                            <div>
                                <div class="row">
                                    <div class="col s12">
                                        <div class="card">
                                            <div class="card-image">
                                                <img src="https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/iron_man-512.png" />
                                                <span class="card-title">{context.currentUser.email}</span>
                                            </div>
                                            <div class="card-content">
                                                <p>Member Since: {context.currentUser.createdAt}</p>
                                                <p>Coins: {context.currentUser.coins}</p>
                                            </div>
                                            {/* <div class="card-action">
                                                <a href="#">This is a link</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <DashBtn link="/shop" name={"Store"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />

                                    <DashBtn link="/inventory" name={"Inventory"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />
                                </div>
                            </div>


                        )
                    } else {
                        return (

                            <div>

                                <DashBtn link="/login" name={"Login"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />


                            </div>
                        )
                    }
                }

                return (
                    <div className="container">

                        {getDashboard()}
                        <div class="row">

                            <DashBtn link="/arcade" name={"Arcade"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />
                            <DashBtn link="/studio" name={"Studio"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />
                            <DashBtn link="/gallery" name={"Gallery"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />

                        </div>


                    </div>
                )
            }}


        </Consumer >

    )

}


export default Game;