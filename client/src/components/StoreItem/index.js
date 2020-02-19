// IMPORT REACT
import React from "react";

const StoreItem = (props) => {

    return (
        <div>
            <a class="waves-effect waves-light btn">
                <i class={props.itemIcon}></i>
                    {props.itemName}
                <i class="fas fa-dollar-sign right"></i>
                    {props.itemCost}                
            </a>
        </div>
    )

}

export default StoreItem;