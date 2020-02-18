import React from "react";
import "./style.css";
import Consumer from "../../configContext.js";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  const getNav = (loggedin) => {
    console.log("here,", loggedin)
    if (loggedin) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">

          <li> <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/studio">Studio</Link>
          </li><li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            {/* onclick */}
            <Link to="/" >Sign Out</Link>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">

        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/studio">Studio</Link>
        </li><li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          {/* onclick */}
          <Link to="/login" >Sign In</Link>
        </li>
      </ul>
      )
    }
  }
  return (
    <Consumer>
      {context => {

        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Artiste Defammé</a>
              {getNav(context.loggedIn)}


            </div>
          </nav>
        )
      }}


    </Consumer>
  )
}



export default Navbar;
