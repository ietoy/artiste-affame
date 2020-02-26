import React from "react";
import Style from "./style.css";
const PortfolioPainting = ({ painting, sell }) => {

    function getStatus() {
        if (painting.galleryShowing) {
            return (
                <button onClick={() => sell(painting)} className="waves-effect waves-light " id="paintingcard">
                    <i className="material-icons left">attach_money</i>
                    Sell
                </button>
            );
        }
    }

    return (
        <div className="card" >
            <div className="card-image">
                <img src={painting.src} />
            </div>
            <div className="card-content">
               
                <h6 className="right">
                    {painting.likes}
                    {getStatus()}
                </h6>
                <br />
                
            </div>
        </div>
    )
}

export default PortfolioPainting;