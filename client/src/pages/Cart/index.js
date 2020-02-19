// IMPORT REACT
import React from "react";

import CartItem from "../../components/CartItem/index.js"

const Cart = () => {

    return (
        
        // FROM THE CART ARRAY IN THE CURRENT STATE,
        // MAP THE ITEMS IN THE USERS CART TO THIS PAGE 
        //      USING THE CartItem COMPONENT. THIS COMPONENT WILL DISPLAY THE 
        //      NAME OF THE ITEM, THE NUMBER OF THAT ITEM IN THE USERS CART, 
        //      AND A BUTTON TO REMOVE ALL OF THAT ITEM FROM THE CART

        // THE CART ITEM COMPONENT WILL NEED TO BE EMPOWERED BY THE FOLLOWING FUNCTIONS:
        //      increaseQty
        //      decreaseQty
        //      remove from cart


        <CartItem

        />



        // THIS PAGE WILL ALSO SHOW THE TOTAL VALUE OF ITEMS IN THE USER'S CART

        // AT THE BOTTOM OF THIS PAGE THERE WILL BE A "CHECKOUT" BUTTON
        //      THIS BUTTON WILL, BEFORE CLEARING THE CART,
        //      DEDUCT THE VALUE OF THE CART FROM  THE USERS COINS
        //      ADD THE CART ITEMS TO THE USER INVENTORY
        //      THEN RETURN THE USER TO THE HOMEPAGE
    )

}

export default Cart;