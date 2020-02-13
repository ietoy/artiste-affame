import React from "react";
import "./style.css";
import Consumer from "../../configContext.js";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
    return (
        <Consumer>
            {context => {
                return (
                    <div className="pos-f-t">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-dark p-4">
                                <h5 className="text-white h4">Collapsed content</h5>
                                <span className="text-muted">Toggleable via the navbar brand.</span>
                            </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                )
            }}


        </Consumer>
    )
}



export default Navbar;
