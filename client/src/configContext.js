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
        portfolio: [],

        // Login Functions
        login: (success, user) => {
            // console.log("LOGIN STATE", success, user);
            if (success) {
                this.setState({ currentUser: user, loggedIn: true });
            } else {
                this.setState(this.state);
            }
        },
        logout: () => {
            // console.log("LOGGIN OUT");
            this.setState({ currentUser: "", loggedIn: false });
        },

        // Page Load Functions
        loadInventory: (inventory) => {
            this.setState({ marketplace_items: inventory });
        },
        loadShownPaintings: (paintings) => {
            console.log("Loading the gallery...", paintings);
            this.setState({ gallery: paintings });
            console.log(this.state.gallery);
        },
        addPainting: (painting) => {
            this.setState(state => ({
                gallery: [
                    ...state.gallery,
                    painting
                ],
                portfolio: [
                    ...state.portfolio,
                    painting
                ]
            }));
        },
        sellPainting: (painting) => {
            // console.log("Painting", painting);
            // console.log("Gallery Before", this.state.gallery);
            // console.log("Portfolio Before", this.state.portfolio);

            this.state.currentUser.coins += painting.likes;
            this.state.gallery.map((paint, index, object) => {
                if (paint._id === painting._id) {
                    object.splice(index, 1);
                }
            });
            this.state.portfolio.map(paint => {
                if (paint._id === painting._id) {
                    paint.galleryShowing = false;
                }
            });

            this.setState(this.state);
            // console.log("Gallery After", this.state.gallery);
            // console.log("Portfolio After", this.state.portfolio);
            // portfolio
            // gallery


        },
        // Cart Functions
        addToCart: (item) => {
            // If the cart is empty
            if (this.state.cart.length === 0) {
                // add the clicked item object to the cart
                this.state.cart.push({
                    _id: item._id,
                    name: item.name,
                    src: item.src,
                    cost: item.cost,
                    description: item.description,
                    qty: 1
                });
                // then update the cart cost
                this.state.updateCartCost();
                // If the cart is NOT empty
            } else {
                // FOUND ITEM SWITCH
                var found = false;
                // For each item in the cart
                for (var i = 0; i < this.state.cart.length; i++) {
                    // if the clicked item matches the name of an item in the cart
                    if (this.state.cart[i].name === item.name) {
                        // Increase the quantity of this item by one
                        this.state.cart[i].qty = (this.state.cart[i].qty + 1)
                        // set found to true
                        found = true
                    }
                }
                // If an item with the same name as the clicked item is NOT FOUND in the cart
                if (!found) {
                    // adds first instance of this item to the cart
                    this.state.cart.push({
                        _id: item._id,
                        name: item.name,
                        src: item.src,
                        cost: item.cost,
                        description: item.description,
                        qty: 1
                    });
                }
                // finally, we update the cart cost
                // this.state.updateCartCost();
            }
            this.state.updateCartCost();
        },
        increaseCartAmt: (name) => {
            // When called, this function finds the corresponding element in the cart array
            // and increases the quantity by one
            this.state.cart.find(x => x.name === name).qty = this.state.cart.find(x => x.name === name).qty + 1;
            // We then update the cartCost by running our updateCartCost function
            this.state.updateCartCost();
            // Then, we force this cartItem component to update
            this.forceUpdate();
        },
        decreaseCartAmt: (name) => {
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
        },
        updateCartCost: () => {
            // console.log("CURRENT CART COST", this.state.cart, this.state.cartCost);
            var newCartCost = 0;
            for (var i = 0; i < this.state.cart.length; i++) {
                newCartCost += (this.state.cart[i].cost * this.state.cart[i].qty)
            };
            this.setState(state => ({
                ...state,
                cartCost: newCartCost
            }))
        },
        checkout: () => {
            var coins = this.state.currentUser.coins;
            var cartCost = this.state.cartCost;
            // if the user can afford the cart cost
            if (cartCost <= coins) {
                console.log("you can afford that!");
                // update the state by deducting the cost from their coins

                var userInventory = this.state.currentUser.inventory;

                this.state.cart.forEach(item => {
                    var found = false;
                    for (var i = 0; i < userInventory.length && !found; i++) {
                        if (item._id == userInventory[i]._id) {
                            userInventory[i].amount += item.qty;
                            found = true;
                            this.state.loadUserInventory({
                                _id: item._id,
                                name: item.name,
                                description: item.description,
                                src: item.src,
                                cost: item.cost,
                            }, userInventory[i].amount);
                        }
                    }
                    if (!found) {
                        userInventory.push({ _id: item._id, amount: item.qty });
                        this.state.loadUserInventory({
                            _id: item._id,
                            name: item.name,
                            description: item.description,
                            src: item.src,
                            cost: item.cost,
                        }, item.qty);
                    }
                });
                // console.log("USER INVENTORY AFTER ADDING ITEMS");
                // console.log(userInventory);
                this.state.currentUser.inventory = userInventory;

                this.state.currentUser.coins -= cartCost;
                // then update the database with this API call
                API.updateUser(this.state.currentUser)
                    .then(res => {
                        // console.log("UPDATE USER RES", res.data);
                    });

                this.state.cart = [];
                this.state.cartCost = 0;
            } else {
                // Otherwise, alert the user that they cannot afford the cart context
                alert("You can't afford all that! Update your cart and try again.")
            }
        },
        // End Cart Functions

        // inventory fxs
        addCoins: (coins) => {
            this.state.currentUser.coins += coins;
        },

        useItem: (itemID) => {
            this.state.userInventory.forEach((item, index, object) => {
                if (item.item._id === itemID) {
                    if (item.amount === 1) {
                        object.splice(index, 1);
                    } else {
                        item.amount--;
                    }
                }
            });
            this.state.currentUser.inventory.forEach((item, index, object) => {
                if (item._id === itemID) {
                    if (item.amount === 1) {
                        object.splice(index, 1);
                    } else {
                        item.amount--;
                    }
                }
            });
            this.setState(this.state);
            console.log("STATE", this.state);
        },
        loadUserInventory: (itemObj, amt) => {
            // console.log("STATE USER INVENTORY", this.state.userInventory);
            // console.log("UPDATING WITH", itemObj, amt);
            var found = false;
            this.state.userInventory.forEach(item => {
                if (itemObj._id == item.item._id) {
                    // item.amount += amt;
                    item.amount = amt;
                    found = true;
                }
            });
            if (!found) {
                this.state.userInventory.push({ item: itemObj, amount: amt });
            }
            // this.state.userInventory.push({ item: itemObj, amount: amt })
        },
        loadPortfolio: (portfolio) => {
            // console.log("INCOMING PORTFOLIO", portfolio);
            this.setState({
                ...this.state,
                portfolio: portfolio
            });
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
                cartCost: this.state.cartCost,
                portfolio: this.state.portfolio,

                // functions to send down
                login: this.state.login,
                logout: this.state.logout,
                loadInventory: this.state.loadInventory,
                loadShownPaintings: this.state.loadShownPaintings,
                addLike: this.state.addLike,
                addToCart: this.state.addToCart,
                increaseCartAmt: this.state.increaseCartAmt,
                decreaseCartAmt: this.state.decreaseCartAmt,
                removeItem: this.state.removeItem,
                updateCartCost: this.state.updateCartCost,
                checkout: this.state.checkout,
                checkoutUpdate: this.state.checkoutUpdate,

                addCoins: this.state.addCoins,
                useItem: this.state.useItem,
                loadUserInventory: this.state.loadUserInventory,
                addPainting: this.state.addPainting,
                loadPortfolio: this.state.loadPortfolio,
                sellPainting: this.state.sellPainting

            }}>
                {/*lets us see our children components  */}
                {this.props.children}
            </Provider>
        )
    }
}
export { ConfigProvider };

export default Consumer;
