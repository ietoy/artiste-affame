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
                <h5> {props.name}: ${props.cost} </h5>
            </div>
            <div className="card-content">
                <div className="row">
                    <a
                        className="waves-effect waves-light btn col 3"
                        onClick={() => props.increaseCartAmt(props.name)}
                    >
                        <i class="fas fa-plus-square"></i>
                    </a>
                    <div className="col 3">
                        {props.qty}
                    </div>
                    <a
                        className="waves-effect waves-light btn col 3"
                        onClick={() => props.decreaseCartAmt(props.name)}
                    >
                        <i class="fas fa-minus-square"></i>
                    </a>
                    <a
                        className="waves-effect waves-light btn right col 3"
                        onClick={() => props.removeItem(props.name)}
                    >
                        <i class="fas fa-times-circle"></i>
                    </a>

                </div>
            </div>
        </div>

    )
}

export default CartItem;