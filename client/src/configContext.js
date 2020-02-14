import React, { Component, createContext } from "react";
//imports react dependencies

//object destructing into a provider and consumer
const { Provider, Consumer } = createContext();

//HAVE TO DEFINE PROVIDER BECAUSE ITS PROVIDING, DONT HAVE TO DEFINE CONSUMER BECAUSE ITS JUST USING THOSE VALUES
//consumer is useless without provider
class ConfigProvider extends Component {

    //sets the global state variables we need
    state = {
        loggedIn: false,
        currentUser: "someone",
        
        marketplace_items: ["Paints", "Sandwich", "Bi-polar medication", "Van Goghs left ear", "Alcohol", "Gambling tokens"],
        cart: [],
        totalCoins: 50,
        gameEarnings: 0,
        bet: 0

    }





    render() {
        return (
            <Provider value={{
                // values to send down
                loggedIn: this.state.loggedIn,
                currentUser: this.state.currentUser,
                marketplace_items: this.state.marketplace_items,
                cart: this.state.cart,
                totalCoins: this.state.totalCoins,
                gameEarnings: this.state.gameEarnings,
                bet: this.state.bet
            }}>
                {/*lets us see our children components  */}
                {this.props.children}
            </Provider>

        )
    }
}
export { ConfigProvider };

export default Consumer;
