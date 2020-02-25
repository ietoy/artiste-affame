// IMPORT REACT
import React from "react";
import Consumer from "../../configContext.js";

// LINK for CART/STORE btn
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/index.js";

const Cart = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div>
                        <div className="center">
                            <h1>
                                {/* figure out how to get cartCost to display here - iet */}
                                Cart Total: {context.cartCost}
                                <div className="right">
                                    <Link to="/store">
                                        <a className="waves-effect waves-light btn-large">
                                            <i className="fas fa-store center"></i>
                                        </a>
                                    </Link>
                                    <a
                                        className="waves-effect waves-light btn-large"
                                        onClick={() => context.checkout()}
                                    >
                                        <i className="fas fa-cash-register center"></i>
                                    </a>
                                </div>
                            </h1>
                            <br />
                            <hr />
                        </div>

                        <div className="row itemholder">
                            {context.cart.map(item => (
                                <CartItem 
                                    // id={item._id}
                                    name={item.name}
                                    src={item.src}
                                    cost={item.cost}
                                    qty={item.qty}
                                    increaseCartAmt={context.increaseCartAmt}
                                    decreaseCartAmt={context.decreaseCartAmt}
                                    removeItem={context.removeItem}
                                />
                            ))}
                        </div>

                    </div>
                )
            }}
        </Consumer>



        // FROM THE CART ARRAY IN THE CURRENT STATE,
        // MAP THE ITEMS IN THE USERS CART TO THIS PAGE 

        // {context.cart.map(item => (
        //     <CartItem
        //         id={item.id}
        //         name={item.name}
        //         src={item.src}
        //         costPer={item.cost}

        //         increaseAmt={context.increaseAmt}
        //         decreaseAmt={context.decreaseAmt}
        //         removeItem={context.removeItem}

        //     />
        // ))}



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