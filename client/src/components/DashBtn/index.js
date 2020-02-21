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
        <div class="col s6">
            <div class="card">
                <div class="card-image">
                    <img src={props.image} />
                    <span class="card-title">{props.name}</span>
                </div>
                <div class="card-content">
                    <p>{props.name}</p>
                </div>
                <div class="card-action">
                    <Link to={props.link}>Go to {props.name}</Link>
                </div>
            </div>
        </div>

    )
}

export default DashBtn;