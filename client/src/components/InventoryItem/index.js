// IMPORT REACT
import React from "react";
import API from "../../utils/API";

const InventoryItem = (props) => {

    return (
     

                <div className="card">
                    <div className="card-image">
                        <img src={props.item.src} />
                    </div>
                    <div className="card-content">
                    <h4 className="card-title">{props.item.name}</h4>
                        <a className="btn-floating btn-large waves-effect waves-light red right"
                            onClick={() => props.useItem(props.item._id)}>Use</a>
                        <div className="row">
                            <div >
                                <p>Quantity: {props.amount}</p>
                            </div>
                            <div >
                                {props.item.description}
                            </div>
                        </div>
                    </div>
                </div>

    )

}

export default InventoryItem;