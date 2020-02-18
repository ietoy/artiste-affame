import React from "react";
import "./style.css";
import Consumer from "../../configContext.js";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
    return (
        <Consumer>
            {context => {
                return (

                  <nav className="navbar navbar-light light-blue lighten-4">
                  <a className="navbar-brand" href="#">Artiste Afammé</a>
                
                  <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                        className="fas fa-bars fa-1x"></i></span></button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Inventory</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Studio</a>
                      </li><li className="nav-item">
                        <a className="nav-link" href="#">Gallery</a>
                      </li>
                      <li className="nav-item">
                        <button>Sign Out</button>
                      </li>
                    </ul>
                
                  </div>
                
                </nav>


                )
            }}


        </Consumer>
    )
}



export default Navbar;
