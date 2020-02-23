import React from "react";
import Style from "./style.css";
const StoreItem = (props) => {

    return (

            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.src} />
                    <span className="card-title">{props.name}</span>
                    <a 
                        className="btn-floating btn-large waves-effect waves-light red right"
                        onClick={() => props.addToCart(props.id, props.cost)}
                    >
                        <i className="material-icons">add</i>
                    </a>

                </div>
                <div className="card-content">
                    <div className="row">
                    <div className="col l2">
                        <i className="fas fa-dollar-sign">
                            {props.cost}
                        </i>
                    </div>
                    <div className="col l10">
                        {props.description}
                    </div>
                    </div>
                </div>
            </div>
   
    )

}

export default StoreItem;