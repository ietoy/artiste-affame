// IMPORT REACT
import React from "react";

// This component generates buttons that represent items in the users cart
// These are viewable when the user looks at their cart while in the store
// clicking a cart item button will decrement the amount in the cart or remove it from the cart.
// maybe add buttons to increment, decrement, or remove?
// RETURN TO THIS

const CartItem = (props) => {

    return (
        <div className="col s6 m4 l3">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.src} />
                    <span className="card-title">{props.name}</span>
                    <a
                        className="waves-effect waves-light btn right"
                        onClick={() => props.removeItem()}
                    >
                        <i class="fas fa-times-circle"></i>
                    </a>
                </div>
                <div className="card-content">
                    <a
                        className="waves-effect waves-light btn"
                        onClick={() => props.increaseAmt()}
                    >
                        <i class="fas fa-plus-square"></i>                    </a>
                        #here
                    <a
                        className="waves-effect waves-light btn"
                        onClick={() => props.decreaseAmt()}
                    >
                        <i class="fas fa-minus-square"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default CartItem;