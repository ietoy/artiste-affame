import React from "react";
import Consumer from "../../configContext.js";
import StoreItem from "../../components/StoreItem/index.js"
import API from "../../utils/API.js";

// WRITE addToCart FX HERE, EMPOWER CHILD COMPONENTS



const Store = () => {

    // Return some JSX
    return(
        // Provides context to the data we intake here
        <Consumer>
            {context =>
                {
                    function loadStore() {
                        API.getAllItems()
                        .then(res => {
                            context.loadInventory(res.data)
                        })
                    }

                    

                    return(
                        context.marketplace_items.map(item => (
                            <StoreItem
                                id={item._id}
                                name={item.name}
                                icon={item.icon}
                                cost={item.cost}
                                // addToCart={this.addToCart} // WRITE THIS
                            />
                        ))

                    )
                }
            }
        </Consumer>
    )
}

export default Store;