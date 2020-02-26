import React from "react";
import ShownPainting from "../../components/ShownPainting/index";
import axios from "axios";
import API from "../../utils/API";
// import "./style.css";
// import Cloudinary from "cloudinary";

import Consumer from "../../configContext.js";

const Portfolio = () => {
    return (
        <Consumer>
            {context => {


                return (

                    <div>


                        <div className="center">
                            <h1>Portfolio</h1>
                            <br />
                            <hr />
                        </div>
                        <div className="row galleryHolder">
                            {context.portfolio.map(painting => (
                                <ShownPainting
                                    key = {painting._id}
                                    id={painting._id}
                                    src={painting.src}
                                    paintingName={painting.paintingName}
                                    likes={painting.likes}
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

