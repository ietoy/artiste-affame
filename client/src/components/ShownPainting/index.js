import React from "react";

const ShownPainting = (props) => {

    return (
        <div>
            <img src={props.src} />
            <hr/>
            <p>{props.paintingName}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default ShownPainting;