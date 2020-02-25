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

        cart: [],
        cartCost: 0,

        gallery: [],
        bet: 0,
        userInventory: [],

        // Login Functions
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

        // Page Load Functions
        loadInventory: (inventory) => {
            this.setState({ marketplace_items: inventory });
        },
        loadShownPaintings: (paintings) => {
            console.log("Loading the gallery...");
            this.setState({ gallery: paintings });
            console.log(this.state.gallery);
        },
        addPainting: (painting) => {
            console.log("BEFORE", this.state.gallery);
            this.setState(state => ({
                gallery: [
                    ...state.gallery,
                    painting
                ]
            }));
            console.log("AFTER", this.state.gallery);

        },

        // Cart Functions
        addToCart: (name, src, cost) => {
            // If the cart is empty
            if (this.state.cart.length === 0) {
                // add the clicked item object to the cart
                this.setState(state => ({
                    cart: [
                        {
                            name: name,
                            src: src,
                            cost: cost,
                            qty: 1
                        }
                    ]
                }));
                // then update the cart cost
                this.state.updateCartCost();
                // If the cart is NOT empty
            } else {
                // FOUND ITEM SWITCH
                var found = false;
                // For each item in the cart
                for (var i = 0; i < this.state.cart.length; i++) {
                    // if the clicked item matches the name of an item in the cart
                    if (this.state.cart[i].name === name) {
                        // Increase the quantity of this item by one
                        this.state.cart[i].qty = (this.state.cart[i].qty + 1)
                        // set found to true
                        found = true
                    }
                }
                // If an item with the same name as the clicked item is NOT FOUND in the cart
                if (!found) {
                    // adds first instance of this item to the cart
                    this.setState(state => ({
                        cart: [
                            ...state.cart,
                            {
                                name: name,
                                src: src,
                                cost: cost,
                                qty: 1
                            }
                        ]
                    }));
                }
                // finally, we update the cart cost
                this.state.updateCartCost();
            }

        },

        increaseCartAmt: (name, cost) => {
            // When called, this function finds the corresponding element in the cart array
            // and increases the quantity by one
            this.state.cart.find(x => x.name === name).qty = this.state.cart.find(x => x.name === name).qty + 1;
            // We then update the cartCost by running our updateCartCost function
            this.state.updateCartCost();
            // Then, we force this cartItem component to update
            this.forceUpdate();
        },
        decreaseCartAmt: (name, cost) => {
            // When called, this function finds the corresponding element in the cart array
            // and decreases the quantity by one
            this.state.cart.find(x => x.name === name).qty = this.state.cart.find(x => x.name === name).qty - 1;
            // If the qty of this cartItem is 0
            if (this.state.cart.find(x => x.name === name).qty === 0) {
                // then we call the RemoveItem function on this element by passing its name.
                this.state.removeItem(name)
            };
            // We then update the cartCost by running our updateCartCost function
            this.state.updateCartCost();
            // Then, we force this cartItem component to update
            this.forceUpdate();
        },
        removeItem: (name) => {
            // When the remove item button is clicked,
            // we find the index of the item to be removed in our cart array
            // where the clicked item name matches that of its place in the array
            var itemToRemove = this.state.cart.findIndex(x => x.name === name);
            // Then, using splice, we remove this object from the cart array
            this.state.cart.splice(itemToRemove, 1);
            // We then update the cartCost by running our updateCartCost function
            this.state.updateCartCost();
            // Finally, we force the element to update, removing it from the display
            this.forceUpdate();
            // update the carts cost
            // updateCartCost FX GOES HERE WHEN COMPLETE
        },
        updateCartCost: () => {
            var newCartCost = 0;
            for (var i = 0; i< this.state.cart.length; i++) {
                newCartCost += (this.state.cart[i].cost * this.state.cart[i].qty)
            };
            this.setState(state => ({
                cartCost: newCartCost
            }))
            console.log(this.state.cartCost)
        },

        checkout: () => {
            console.log("you checked out!")
        },
        // End Cart Functions

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
                updateCartCost: this.state.updateCartCost,
                checkout: this.state.checkout,

                addCoins: this.state.addCoins,
                useItem: this.state.useItem,
                loadUserInventory: this.state.loadUserInventory,
                addPainting: this.state.addPainting

            }}>
                {/*lets us see our children components  */}
                {this.props.children}
            </Provider>
        )
    }
}
export { ConfigProvider };

export default Consumer;
