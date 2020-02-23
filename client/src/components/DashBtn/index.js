// IMPORT REACT
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function DashBtn(props) {
    return (
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="card-title">
                {props.name}
                </div>
                <div className="card-action">
                    <Link to={props.link}>Go to {props.name}</Link>
                </div>
            </div>

    )
}

export default DashBtn;

          