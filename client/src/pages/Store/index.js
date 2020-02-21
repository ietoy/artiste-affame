import React, { useEffect } from "react";
import Consumer from "../../configContext.js";
import StoreItem from "../../components/StoreItem/index.js"
import API from "../../utils/API.js";
import Wrapper from "../../components/Wrapper/index.js";
import { Link } from "react-router-dom";

// WRITE addToCart FX HERE, EMPOWER CHILD COMPONENTS



const Store = () => {

    // Return some JSX
    return (
        // Provides context to the data we intake here
        <Consumer>
            {context => {
                function loadStore() {
                    if (context.marketplace_items.length === 0) {
                        API.getAllItems()
                            .then(res => {
                                // console.log(res)
                                context.loadInventory(res.data);
                            })
                    }
                }

                return (
                    <Wrapper>
                        {loadStore()}
                        <div className="container section">
                            <div className="center">
                                <h1>
                                    Store
                                    <a className="waves-effect waves-light btn-large right">
                                        <i className="fas fa-shopping-cart center"></i>
                                    </a>
                                </h1>
                                <br/>
                                <hr/>
                            </div>
                         
                            <div className="row">
                            {context.marketplace_items.map(item => (
                                <StoreItem
                                    id={item._id}
                                    name={item.name}
                                    icon={item.icon}
                                    src={item.src}
                                    cost={item.cost}
                                    description={item.description}
                                // addToCart={this.addToCart} // WRITE THIS
                                />
                            ))}
                            </div>

                        </div>
                    </Wrapper>
                )
            }}
        </Consumer>
    )
}

export default Store;