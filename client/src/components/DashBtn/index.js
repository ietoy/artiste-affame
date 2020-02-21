// IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function DashBtn(props) {
    return (
            <div className="card hoverable">
                <div className="card-image">
                    <img className="dashboardImg" src={props.image} />
                    <span className="card-title">{props.name}</span>
                </div>
                <div className="card-content">
                    <p>{props.name}</p>
                </div>
                <div className="card-action">
                    <Link to={props.link}>Go to {props.name}</Link>
                </div>
            </div>

    )
}

export default DashBtn;