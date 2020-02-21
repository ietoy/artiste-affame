// IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";


// This component generates navbuttons on the homepage for the user to navigate the various game pages
// These buttons link to the following pages:
//      Inventory
//      Gallery
//      Store
//      Studio
//      Arcade

function DashBtn(props) {
    return (
        <div className="col s6">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} />
                    <span className="card-title">{props.name}</span>
                </div>
                <div className="card-content">
                    <p>{props.name}</p>
                </div>
                <div className="card-action">
                    <Link to={props.link}>Go to {props.name}</Link>
                </div>
            </div>
        </div>

    )
}

export default DashBtn;