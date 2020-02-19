// IMPORT REACT
import React from "react";
import Consumer from "../../configContext.js";
import InventoryItem from "../../components/InventoryItem/index.js"

// This page will display items currently in the users inventory
// When the user clicks on a USABLE item, they will consume 1 of that item

const Inventory = () => {
// Return some JSX
return(
    // Provides context to the data we intake here
    <Consumer>
        {context =>
            {
                return(
                    // "inventory" CURRENTLY UNDEFINED
                    // ADD THIS TO CONTEXT STATE
                    // ON LOGIN OR FROM DB WHEN OPENING INVENTORY PAGE
                    context.inventory.map(item => (
                        <InventoryItem
                            name={item.name}
                            icon={item.icon}
                            amt={item.amt}
                        />
                    ))
                )
            }
        }
    </Consumer>
)
}

export default Inventory;