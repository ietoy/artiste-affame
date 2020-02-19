// IMPORT REACT
import React from "react";

const InventoryItem = (props) => {

    return (
        <div>
            <a class="waves-effect waves-light btn">
                <i class={props.icon}></i>
                    {props.name}
                <i class="fas fa-hashtag"></i>
                    {props.amt}                
            </a>
        </div>
    )

}

export default InventoryItem;