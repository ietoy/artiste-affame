// IMPORT REACT
import React from "react";
import CartItem from "../../components/CartItem/index.js";



const Cart = () => {

    return (
        
        // FROM THE CART ARRAY IN THE CURRENT STATE,
        // MAP THE ITEMS IN THE USERS CART TO THIS PAGE 

        // PLACEHOLDER REFERENCE DOT NOTATION
        something.somethingelse.map(item => (
            <CartItem
                icon={item.icon}
                name={item.name}
                qtyInCart={item.qtyInCart}

                increaseQty={this.increaseQty}
                decreaseQty={this.decreaseQty}
                removeFromCart={this.removeFromCart}
            />
        ))
      
        // THIS PAGE WILL ALSO SHOW THE TOTAL VALUE OF ITEMS IN THE USER'S CART

        // AT THE BOTTOM OF THIS PAGE THERE WILL BE A "CHECKOUT" BUTTON
        //      THIS BUTTON WILL, BEFORE CLEARING THE CART,
        //      DEDUCT THE VALUE OF THE CART FROM  THE USERS COINS
        //      ADD THE CART ITEMS TO THE USER INVENTORY
        //      THEN RETURN THE USER TO THE HOMEPAGE
        // INCLUDE VALIDATION IF CART CONTENTS COSTS MORE THAN USER COINS
    )

}

export default Cart;