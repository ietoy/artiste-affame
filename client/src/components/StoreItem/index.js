// IMPORT REACT
import React from "react";

const StoreItem = (props) => {

    return (
        <div>
            <a class="waves-effect waves-light btn">
                {/* figure out how to concat in item name when generating icon */}
                <i class="fas fa-cheese left"></i>
                    {props.itemName}
                <i class="fas fa-dollar-sign right"></i>
                    {props.itemCost}                
            </a>
        </div>
    )

}

export default StoreItem;