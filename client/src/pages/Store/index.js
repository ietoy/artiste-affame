import React from "react";
import Consumer from "../../configContext.js";
import StoreItem from "../../components/StoreItem/index.js"

// WRITE addToCart FX HERE, EMPOWER CHILD COMPONENTS

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
                                addToCart={this.addToCart}
                            />
                        ))
                    )
                }
            }
        </Consumer>
    )
}

export default Store;