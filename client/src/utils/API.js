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
    //@return => res.data returns item object
    getItem: function (itemId) {
        return axios.get("api/items/" + itemId);
    },
    //user requests
    //@params => cart : [{itemID, amount}, ...] 
    //@return => res.data user object with updated inventory
    addItems: function (cart, userID) {
        return axios.put("api/users/checkout/" + userID, cart);
    },
    //@params => itemID => {_id: itemID}
    //@return => res.data user object with updated inventory
    useItem: function (itemID, userID) {
        return axios.put("api/users/use/" + userID, itemID);
    },
    updateUser: function (user) {
        console.log("API CALL TO UPDATE USER", user);
        return axios.put("/api/users/addcoins/" + user._id, user);
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
    },
    updatePainting: function (painting) {
        return axios.put("api/paintings/" + painting._id, painting);
    },
    //@param => userID
    //@return => array of paintings that belong to the user
    getPortfolio(userID) {
        return axios.get("api/paintings/portfolio/" + userID);
    },
    // THIS FUNCTION WILL UPDATE THE PAINTING DOC WITH A LIKE FROM THE USER
    addLike: function (paintingID) {
        console.log(paintingID);
        return axios.put("api/paintings/like/" + paintingID)
    }

    // isAuth: function (_id) {
    //     return axios.get("api/users/" + _id);
    // }
}