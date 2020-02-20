import React, { useEffect } from "react";
import "./style.css";
import Consumer from "../../configContext";
import API from "../../utils/API";

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
        API.login(user).then(res => {
            console.log("USER LOGIN AFTER SIGNUP");
            console.log(res);
        });

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

        // var itemID = {_id: "5e4b78ccb42d7904c822a5fb"}
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
        // apiTest();

    }, []);

    return (
        <Consumer>
            {context => {
                return (
                    <div className="container">


                        <a className="waves-effect waves-light btn">button</a>
                        <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
                        <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>button</a>

                        <div className="card" >
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-header">
                                {/* {context.currentUser} */}
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