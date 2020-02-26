import React, { useEffect } from "react";
import "./style.css";
import Consumer from "../../configContext.js";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }, []);

  return (
    <Consumer>


      {context => {

        function getNav() {
          if (context.loggedIn) {
            return (
              <div>
                <li><Link to="/arcade">Arcade</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/studio">Studio</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/" onClick={() => context.logout()}>Sign Out</Link></li>
              </div>
            )
          }
          else {
            return (
              <div>
                <li> <Link to="/arcade">Arcade</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/studio">Studio</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/login" >Sign In</Link></li>
              </div>
            )
          }
        }


        return (
          <nav>

            <nav>
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Artiste Defammé</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  {getNav()}
                </ul>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
              {getNav()}
            </ul>

          </nav>
        )
      }}


    </Consumer>
  )
}



export default Navbar;
