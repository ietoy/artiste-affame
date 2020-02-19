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
                    // Return some JSX
                    return(
                        context.marketplace_items.map(item => (
                            <StoreItem
                                // pass item name, icon if we have it
                                // and the onclick function to add to cart
                                // via passing props HERE
                            />
                        ))
                    )
                }
                
            }

        </Consumer>

    )

}

export default Store;