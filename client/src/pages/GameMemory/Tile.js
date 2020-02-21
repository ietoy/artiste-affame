import React from "react";
import "./style.css";

function Tile({ click, image }) {
    return (
        <div onClick={() => click(image)} className="col s4">
            <img className="mb-3 img-thumbnail" src={image} alt={image} />
        </div>
    );
}

export default Tile;
