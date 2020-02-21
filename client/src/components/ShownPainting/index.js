import React from "react";

const ShownPainting = (props) => {

    console.log(props)
    console.log(props.src);
    console.log(props.paintingName);
    console.log(props.likes);



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