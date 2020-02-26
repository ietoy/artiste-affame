// IMPORT REACT
import React from "react";
import Consumer from "../../configContext.js";

// LINK for CART/STORE btn
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/index.js";
import Style from "./style.css";
const Cart = () => {
    return (
        <Consumer>

            {context => {

                function getTotal() {
                    // context.updateCartCost();
                    console.log("GETTING TOTaL", context.cartCost);
                    return context.cartCost;
                }

                return (
                    <div>
                        <div className="center">
                            <h1>

                                Cart Total: {getTotal()}

                                <div className="right">
                                    <Link className="waves-effect waves-light btn-large"  to="/store">
                                        <i className="fas fa-store center" ></i>
                                    </Link>
                                    <Link className="waves-effect waves-light btn-large"
                                        onClick={() => context.checkout()} to="/inventory">
                                        <i className="fas fa-cash-register center"></i>
                                    </Link>
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
    )
}

export default Cart;