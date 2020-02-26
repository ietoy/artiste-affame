import React from "react";

const PortfolioPainting = ({ painting, sell }) => {

    function getStatus() {
        if (painting.galleryShowing) {
            return (
                <button onClick={() => sell(painting)} className="waves-effect waves-light btn">
                    <i className="material-icons left">attach_money</i>
                    Sell
                </button>
            );
        }
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={painting.src} />
            </div>
            <div className="card-content">
                <h5 className="left">
                    {painting.paintingName}
                </h5>
                <h6 className="right">
                    {painting.likes}
                </h6>
                <br />
                {getStatus()}
            </div>
        </div>
    )
}

export default PortfolioPainting;