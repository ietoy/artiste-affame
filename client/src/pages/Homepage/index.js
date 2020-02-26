import React, { useEffect } from "react";
import "./style.css";
import Consumer from "../../configContext";
import API from "../../utils/API";
import DashBtn from "../../components/DashBtn"
import Style from "./style.css";
const Game = props => {

    //add onclick to handle which card was clicked and connect accordingly

    useEffect(() => {
        console.log("LOADED GAME!");
    }, []);

    return (
        <Consumer>
            {context => {

                function loadUser() {
                    //Load user Inventory and portfolio to state upon login
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

                        //load user portfolio
                        API.getPortfolio(context.currentUser._id)
                            .then(portfolio => {
                                // console.log("GETTING PORTFOLIO", portfolio);
                                context.loadPortfolio(portfolio.data);
                            });

                    }
                }

                function getDashboard() {
                    if (context.loggedIn) {
                        return (

                            <div id="profile">


                            <div className="login">
                            <div className="card card-border z-depth-2" id="logincard">
                                    <div className="card-content">

                                        <img className="responsive-img circle" src={context.currentUser.avatarSRC}alt="" />

                                        <h4>Welcome {context.currentUser.username}!</h4>
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
                                    <DashBtn link="/portfolio" name="Portfolio" image="https://res.cloudinary.com/artiste-defamme/image/upload/v1582753839/stock/portfolio_zexowy.jpg" />

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