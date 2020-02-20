// IMPORT REACT
import React from "react";
import Consumer from "../../configContext.js";
import InventoryItem from "../../components/InventoryItem/index.js"

// This page will display items currently in the users inventory
// When the user clicks on a USABLE item, they will consume 1 of that item

// WRITE consumeItem FX THAT DOES THE FOLLOWING:
//      ON CLICK, LOOK AT THE ITEM THAT WAS CLICKED AS ITS TRACKED IN THE GLOBAL STATE
//      REDUCE THE NUMBER OF THAT ITEM IN THE GLOBAL STATE BY ONE
//      APPLY WHATEVER BENEFIT OF USING THAT ITEM TO THE REST OF THE STATE
//      RETURN THE UPDATED INVENTORY PAGE WITH THE NEW INVENTORY AMOUNTS
//      IF THE AMOUNT FOR THE CLICKED ITEM IS NOW 0, DO NOT RENDER THAT InventoryItem

// UPDATE mongoDB WHEN THE USER LEAVES THE PAGE

const Inventory = () => {
    // Return some JSX
    return (
        // Provides context to the data we intake here
        <Consumer>
            {context => {
                return (
                    // "inventory" CURRENTLY UNDEFINED
                    // ADD THIS TO CONTEXT STATE
                    // ON LOGIN OR FROM DB WHEN OPENING INVENTORY PAGE
                    context.inventory.map(item => (
                        <InventoryItem
                            name={item.name}
                            icon={item.icon}
                            amt={item.amt}
                            consumeItem={this.consumeItem} // WE WILL EMPOWER THIS COMPONENT WITH THE consumeItem FUNCTION ONCE WRITTEN
                        />
                    ))
                )
            }
            }
        </Consumer>
    )
}

export default Inventory;