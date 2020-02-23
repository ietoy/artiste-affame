import React from "react";
import Style from "./style.css"
const ShownPainting = (props) => {

    // console.log(props)
    // console.log(props.src);
    // console.log(props.paintingName);
    // console.log(props.likes);



    return (

        // <div className="col">
            <div className="card">
                <div className="card-image">
                    <img src={props.src} />
                </div>
                <div className="card-content">
                    <h5 className="left">
                        {props.paintingName}
                    </h5>
                    <h6 className="right">
                        {props.likes}
                    </h6>
                    <br />
                </div>
            </div>
        // </div>
    )
}

export default ShownPainting;