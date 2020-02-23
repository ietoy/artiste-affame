import React from "react";
import Consumer from "../../configContext.js";
import StoreItem from "../../components/StoreItem/index.js"
import API from "../../utils/API.js";
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

                return (
                    <div>
                        {loadStore()}
                            <div className="center">
                                <h1>
                                    Store
                                    <div className="right">
                                        <a className="waves-effect waves-light btn-large">
                                            <i className="fas fa-store center"></i>
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