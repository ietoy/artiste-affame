// IMPORT REACT
import React from "react";

// This component generates buttons that represent items in the users cart
// These are viewable when the user looks at their cart while in the store
// clicking a cart item button will decrement the amount in the cart or remove it from the cart.
// maybe add buttons to increment, decrement, or remove?
// RETURN TO THIS

const CartItem = (props) => {

    return(
        <div>
            
            {/* ITEM ICON */}
            <i className={props.icon}></i>
            {/* ITEM NAME */}
            <p> {props.name} </p>
            {/* QTY IN CART */}
            <p> {props.qtyInCart} </p>

            {/* INCREASE QTY BTN */}
            <button onClick={() => props.increaseQty} >+</button>
            {/* DECREASE QTY BTN */}
            <button onClick={() => props.decreaseQty} >-</button>
            {/* REMOVE FROM CART BTN */}
            <button onClick={() => props.removeFromCart}>X</button>
            
        </div>
    
    )
}

export default CartItem;