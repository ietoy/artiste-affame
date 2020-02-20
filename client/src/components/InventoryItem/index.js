// IMPORT REACT
import React from "react";

const InventoryItem = (props) => {

    return (
        <div>
            {/* ONCE WRITTEN, ADD THE consumeItem FX TO AN onClick LISTENER TO THIS COMPONENT */}
            <a className="waves-effect waves-light btn-large">
                <i className={props.icon}></i>
                    {props.name}
                <i className="fas fa-hashtag"></i>
                    {props.amt}                
            </a>
        </div>
    )

}

export default InventoryItem;