import axios from "axios";

export default {
    //item requests
    //@return => res.data returns item object
    insertItem: function (item) {
        return axios.post("api/items/add", item);
    },
    //@return => res.data returns array of item objects
    getAllItems: function () {
        return axios.get("api/items/store");
    },
    //user requests
    //@params => cart : [{itemID, amount}, ...] 
    //@return => res.data user object with updated inventory
    addItems: function (cart, userID) {
        return axios.put("api/users/checkout/" + userID, cart);
    },
    //@return => res.data user object with updated inventory
    useItem: function (itemID, userID) {
        return axios.put("api/users/use/" + userID, itemID);
    },
    updateCoins: function (user) {
        console.log("API CALL TO UPDATE USER", user);
        return axios.put("api/users/addcoins/" + user._id, user.coins);
    },
    //@params => user : user object
    //@return => res.data.success returns true if login was succesful. res.data.user returns user object
    login: function (user) {
        return axios.post("api/users/login", user);
    },
    //@return => res.data returns user object
    signup: function (user) {
        return axios.post("api/users/signup", user);
    },
    //paintings requests
    //get all paintings baing displayed
    //@return => array of paintings showing
    getGallery: function () {
        return axios.get("api/paintings/gallery")
    },
    //Painting object
    //@return => paiting object
    addPainting: function (painting, userID) {
        return axios.post("api/paintings/add/" + userID, painting);
    }
    // isAuth: function (_id) {
    //     return axios.get("api/users/" + _id);
    // }
}