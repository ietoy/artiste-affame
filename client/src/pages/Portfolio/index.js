import React from "react";
import PortfolioPainting from "../../components/PortfolioPainting/index";
import API from "../../utils/API";

import Consumer from "../../configContext.js";

const Portfolio = () => {
    return (
        <Consumer>
            {context => {

                function sell(painting) {
                    console.log("SELLING", painting);
                    context.sellPainting(painting);
                    // API.updateUser(context.currenUser)
                        // .then(res => console.log(res));
                }

                return (

                    <div>


                        <div className="center">
                            <h1>Portfolio</h1>
                            <br />
                            <hr />
                        </div>
                        <div className="row galleryHolder">
                            {context.portfolio.map(painting => (
                                <PortfolioPainting
                                    key={painting._id}
                                    painting={painting}
                                    sell={sell}
                                />
                            ))}
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default Portfolio;

