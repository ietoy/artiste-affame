import React, { useEffect } from "react";
import Consumer from "../../configContext.js";
import StoreItem from "../../components/StoreItem/index.js"
import Wrapper from "../../components/Wrapper/index.js";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import Style from "./style.css";
const Store = () => {
    return (
        <Consumer>
            {context => {
                function loadStore() {
                    if (context.marketplace_items.length === 0) {
                        API.getAllItems()
                            .then(res => {
                                context.loadInventory(res.data);
                            })
                    }
                }

                // // this function adds items to the cart once the user clicks them
                // function addToCart(item) {
                //     // this function takes in the name or the id of the item being clicked

                //     // check the cart in context

                //         // if that item is already in the cart,
                //         // increase the number of that item in the cart
                //         // by one

                //         // else, add that item to the cart with an amt of
                //         // of one
                //     context.addToCart(item)
                // }

                return (
                    <div>
                        {loadStore()}
                            <div className="center">
                                <h1>
                                    Store
                                    <div className="right">
                                        <a className="waves-effect waves-light btn-large">
                                            <i className="fas fa-shopping-cart center"></i>
                                        </a>
                                        <a className="waves-effect waves-light btn-large">
                                            <i className="fas fa-cash-register center"></i>
                                        </a>
                                    </div>
                                </h1>
                                <br />
                                <hr />
                            </div>
                            <div className="row itemholder">
                                {context.marketplace_items.map(item => (
                                    <StoreItem
                                        id={item._id}
                                        name={item.name}
                                        icon={item.icon}
                                        src={item.src}
                                        cost={item.cost}
                                        description={item.description}
                                        addToCart={context.addToCart}
                                    />
                                ))}
                            </div>

                    </div>
                )
            }}
        </Consumer>
    )
}

export default Store;