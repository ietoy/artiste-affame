// IMPORT REACT
import React from "react";
import Consumer from "../../configContext.js";
import StoreItem from "../../components/StoreItem/index.js"

// This page displays all items available for sale in the store
// The user can view these items, add them to their shopping cart, and view their cart
// The user can "checkout" from the cart page

const Store = () => {

    // Return some JSX
    return(
        // Provides context to the data we intake here
        <Consumer>
            {context =>
                {
                    return(
                        // CONSIDER CHANGING marketplace_items
                        // TO BE PULLED FROM DB
                        context.marketplace_items.map(item => (
                            <StoreItem
                                name={item.name}
                                icon={item.icon}
                                cost={item.cost}
                            />
                        ))
                    )
                }
            }
        </Consumer>
    )
}

export default Store;