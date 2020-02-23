// IMPORT REACT
import React from "react";
import Style from "./style.css";

const CartItem = (props) => {

    return (
        <div className="card hoverable">
            <div className="card-image">
                <img src={props.src} alt={props.name} />
            </div>
            <div className="card-title">
                <h5> {props.name}: {props.cost} </h5>
            </div>
            <div className="card-content">
                <a
                    className="waves-effect waves-light btn"
                    onClick={() => props.increaseAmt()}
                >
                    <i class="fas fa-plus-square"></i>
                </a>
                <div>
                    {props.qty}
                </div>
                <a
                    className="waves-effect waves-light btn"
                    onClick={() => props.decreaseAmt()}
                >
                    <i class="fas fa-minus-square"></i>
                </a>
                <a
                    className="waves-effect waves-light btn right"
                    onClick={() => props.removeItem()}
                >
                    <i class="fas fa-times-circle"></i>
                </a>
            </div>
        </div>

    )
}

export default CartItem;