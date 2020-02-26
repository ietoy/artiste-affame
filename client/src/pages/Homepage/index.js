import React, { useEffect } from "react";
import "./style.css";
import Consumer from "../../configContext";
import API from "../../utils/API";
import DashBtn from "../../components/DashBtn"
import Style from "./style.css";
const Game = props => {

    const apiTest = () => {
        console.log("BEGGINING API TEST");
        //LOGIN USERNAME TEST
        // var user = {
        //     username: "kqarlos",
        //     email: "kqarlos@hotmail.com",
        //     password: "password",
        // }
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
        //     name: "item#1",
        //     description: "item#5 description",
        //     src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382545039107.jpeg",
        //     cost: 100,
        //     icon: "fas fa-pizza-slice"
        // };
        // API.insertItem(item).then(res => {
        //     console.log("ADDING ITEM");
        //     console.log(res);
        // });

        // API.getAllItems().then(res => {
        //     console.log("GETTING ALL ITEMS");
        //     console.log(res);
        // });

        //item#1, item#3, item#5
        // var cart = [
        //     { _id: "5e5096da7a19e25f6449a812", amount: 5 },
        //     { _id: "5e5097077ae1b35898896e74", amount: 4 },
        //     { _id: "5e50972ffd9d5a397c9a864b", amount: 3 }
        // ];

        // API.addItems(cart, "5e4f96ed28ff601d549e0609").then(res => {
        //     console.log("ADDING ITEMS");
        //     console.log(res);
        // });

        // var itemID = {_id: "5e4b6f0555340530a0a90162"}
        //   API.useItem(itemID, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("USING ITEMS");
        //     console.log(res);
        // });

        //PAINTING TEST
        // var painting = {
        //     paintingName: "Painting #1",
        //     painter: "5e4b8c5d2ce57e068478af05",
        //     likes: 0,
        //     value: 0
        // }

        // API.addPainting(painting, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("ADDING PAINTING");
        //     console.log(res);
        // });

        // API.getGallery().then(res => {
        //     console.log("GETTING GALLERY");
        //     console.log(res);
        // });

    }

    //add onclick to handle which card was clicked and connect accordingly

    useEffect(() => {
        console.log("LOADED!");
        //load user inventory
        apiTest();

    }, []);

    return (
        <Consumer>
            {context => {

                function loadUser() {
                    //Load user Inventory to state upon login
                    if (context.loggedIn) {
                        // context.userInventory = context.currentUser.inventory;
                        context.currentUser.inventory.forEach(item => {
                            // console.log("ITEM FROM CONTEXT",item);
                            API.getItem(item._id)
                                .then(res => {
                                    // console.log("ITEM RECEIVED FROM API", res.data);
                                    context.loadUserInventory(res.data, item.amount);
                                });
                        });
                    }
                }

                function getDashboard() {
                    if (context.loggedIn) {
                        return (

                            <div id="profile">

                            <div className="login">
                            <div className="card card-border z-depth-2">
                                    <div className="card-content">

                                        <img className="responsive-img circle" src="https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/iron_man-512.png" alt="" />

                                        <h4>Welcome {context.currentUser.email}!</h4>
                                        <h6>Coins: {context.currentUser.coins}</h6>

                                    </div>
                                    <hr />
                                    <p>Unique Items Count: {context.currentUser.inventory.length}</p>
                                    <p>Paintings Count: {context.currentUser.portfolio.length}</p>
                                    <p>Member Since: {context.currentUser.createdAt}</p>
                                </div>
                            </div>
                              


                                <div className="loginlinks">
                                    <DashBtn link="/shop" name="Store" image="https://res.cloudinary.com/artiste-defamme/image/upload/v1582658654/stock/store_v9khdp.jpg" />

                                    <DashBtn link="/inventory" name="Inventory" image="https://res.cloudinary.com/artiste-defamme/image/upload/v1582658447/stock/Inventory_mgvrr8.jpg" />
                                </div>

                            </div>

                        )
                    } else {
                        return (
                            <div className="login">

                            <DashBtn link="/login" name="Login" image="https://res.cloudinary.com/artiste-defamme/image/upload/v1582657909/stock/login_ob7wtj.jpg" />
                            </div>
                        )
                    }
                }

                return (
                    <div>
                           {loadUser()}
                            {getDashboard()}

                        <div className="notloggedin">
                   
                            <DashBtn link="/arcade" name={"Arcade"} image={"https://res.cloudinary.com/artiste-defamme/image/upload/v1582657910/stock/arcade_q2cpld.jpg"} />

                            <DashBtn link="/studio" name={"Studio"} image={"https://res.cloudinary.com/artiste-defamme/image/upload/v1582657910/stock/studio_irz131.jpg"} />

                            <DashBtn link="/gallery" name={"Gallery"} image={"https://res.cloudinary.com/artiste-defamme/image/upload/v1582657910/stock/gallery_rtdikq.jpg"} />
                        </div>




                    </div>






                )
            }}
        </Consumer >
    )
}


export default Game;