import React from "react";
import Style from "./style.css";
const StoreItem = (props) => {

    return (

        <div className="card hoverable">
            <div className="card-image">
                <img src={props.item.src} alt={props.item.name} />
            </div>
            <div className="card-title">
                <h5>  {props.item.name}  </h5>
            </div>
            <div className="card-content">
                <div className="row">
                    <div className="cartbutton">
                        <a
                            className="btn-floating btn-large waves-effect waves-light red right"
                            onClick={() => props.addToCart(props.item)}
                        >
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                    <div className="cost row">
                        <i className="fas fa-dollar-sign">
                            {props.item.cost}
                        </i>
                    </div>
                    <div className="description row">
                        {props.item.description}
                    </div>
                </div>
            </div>
        </div>

    )

}

export default StoreItem;