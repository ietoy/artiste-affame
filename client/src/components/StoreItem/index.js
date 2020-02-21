import React from "react";

const StoreItem = (props) => {

    return (
        <div className="col s6 m4 l3">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.src} />
                    <span className="card-title">{props.name}</span>
                </div>
                <div className="card-content">
                    <div className="row">
                    <div className="col l2">
                        <i className="fas fa-dollar-sign">
                            {props.cost}
                        </i>
                    </div>
                    <div className="col l10">
                        {props.description}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StoreItem;