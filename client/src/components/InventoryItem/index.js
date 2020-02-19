// IMPORT REACT
import React from "react";

const InventoryItem = (props) => {

    return (
        <div>
            <a className="waves-effect waves-light btn">
                <i className={props.icon}></i>
                    {props.name}
                <i className="fas fa-hashtag"></i>
                    {props.amt}                
            </a>
        </div>
    )

}

export default InventoryItem;