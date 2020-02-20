import React from "react";
import "./style.css";
import Consumer from "../../configContext.js";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {


  return (
    <Consumer>
      {context => {

        function getNav()  {
          if (context.loggedIn) {
            return (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <Link to="/arcade">Arcade</Link>
                </li>
                <li> <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/studio">Studio</Link>
                </li><li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => context.logout()}>Sign Out</Link>
                </li>
              </ul>
            )
          }
          else {
            return (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <Link to="/arcade">Arcade</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/studio">Studio</Link>
                </li><li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/login" >Sign In</Link>
                </li>
              </ul>
            )
          }
        }


        return (
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Artiste Defammé</Link>
              {getNav()}


            </div>
          </nav>
        )
      }}


    </Consumer>
  )
}



export default Navbar;
