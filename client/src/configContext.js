import React, { Component, createContext } from "react";
//imports react dependencies

import API from "../src/utils/API";
//object destructing into a provider and consumer
const { Provider, Consumer } = createContext();

//HAVE TO DEFINE PROVIDER BECAUSE ITS PROVIDING, DONT HAVE TO DEFINE CONSUMER BECAUSE ITS JUST USING THOSE VALUES
//consumer is useless without provider
class ConfigProvider extends Component {

    //sets the global state variables we need
    state = {
        loggedIn: false,
        currentUser: {},
        marketplace_items: [],
        cart: {
            cartCost: 0
        },
        gallery: [],
        bet: 0,
        userInventory: [],
        login: (success, user) => {
            console.log("LOGIN STATE", success, user);
            if (success) {
                this.setState({ currentUser: user, loggedIn: true });
            } else {
                this.setState(this.state);
            }
        },
        logout: () => {
            console.log("LOGGIN OUT");
            this.setState({ currentUser: "", loggedIn: false });
        },
        loadInventory: (inventory) => {
            this.setState({ marketplace_items: inventory });
        },
        loadShownPaintings: (paintings) => {
            console.log("Loading the gallery...");
            this.setState({ gallery: paintings });
            console.log(this.state.gallery);
        },

        // store & cart fxs
        addToCart: (item, cost) => {
            if (!this.state.cart[item]) {
                this.setState(state => ({
                    cart: {
                        ...state.cart,
                        [item]: 1,
                        cartCost: state.cart.cartCost + cost
                    },
                }))
            } else {
                this.setState(state => ({
                    cart: {
                        ...state.cart,
                        [item]: state.cart[item] + 1,
                        cartCost: state.cart.cartCost + cost
                    }
                }))
            }
        },
        increaseCartAmt: () => {},
        decreaseCartAmt: () => {},
        removeItem: () => {},
        checkout: () => {
            console.log("you checked out!")
        },

        // inventory fxs
        addCoins: (coins) => {
            this.state.currentUser.coins += coins;
        },
        useItem: (itemID) => {
            this.state.userInventory.forEach(item => {
                if (item.item._id === itemID) {
                    item.amount--;
                }
            });
            this.setState(this.state);
            console.log("STATE", this.state);

        },
        loadUserInventory: (itemObj, amt) => {
            this.state.userInventory.push({ item: itemObj, amount: amt })
        }
    }

    render() {
        return (
            <Provider value={{
                // values to send down
                loggedIn: this.state.loggedIn,
                currentUser: this.state.currentUser,
                marketplace_items: this.state.marketplace_items,
                cart: this.state.cart,
                gallery: this.state.gallery,
                totalCoins: this.state.totalCoins,
                gameEarnings: this.state.gameEarnings,
                bet: this.state.bet,
                userInventory: this.state.userInventory,

                // functions to send down
                login: this.state.login,
                logout: this.state.logout,
                loadInventory: this.state.loadInventory,
                loadShownPaintings: this.state.loadShownPaintings,
                addToCart: this.state.addToCart,
                increaseCartAmt: this.state.increaseCartAmt,
                decreaseCartAmt: this.state.decreaseCartAmt,
                removeItem: this.state.removeItem,
                checkout: this.state.checkout,
                
                addCoins: this.state.addCoins,
                useItem: this.state.useItem,
                loadUserInventory: this.state.loadUserInventory

            }}>
                {/*lets us see our children components  */}
                {this.props.children}
            </Provider>
        )
    }
}
export { ConfigProvider };

export default Consumer;
