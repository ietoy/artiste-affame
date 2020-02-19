import React from "react";

import ShownPainting from "../ShownPainting/ShownPainting";

function Gallery() {

    // set a variable equal to a new array OR USE STATE
    // take all of the paintings with a showing value of true
    // add these paintings to the new array OR STATE
    // for each of these paintings, MAP
        // Feed the props of the painting to the Shown Painting components
        // rememeber you will need two returns here, one outside the map and one inside

        something.somethingelse.map(painting => (
            <ShownPainting
                src={painting.src}
                paintingName={painting.paintingName}
                painter={painting.painter}
                likes={painting.likes}
                handleLike={this.handleLike}
            />

        ))
}

export default Gallery;