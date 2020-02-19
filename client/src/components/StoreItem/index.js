// IMPORT REACT
import React from "react";

const StoreItem = (props) => {

    return (
        <div>
            <a class="waves-effect waves-light btn">
                <i class={props.icon}></i>
                    {props.name}
                <i class="fas fa-dollar-sign right"></i>
                    {props.cost}                
            </a>
        </div>
    )

}

export default StoreItem;