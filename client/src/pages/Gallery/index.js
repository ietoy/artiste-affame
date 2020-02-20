// IMPORT REACT
import React from "react";
import ShownPainting from "../../components/ShownPainting";

// This page shows all paintings currently on display in the Gallery.
// Players can offer likes to paintings made by other players, but only once per painting
// This page will use the ShownPainting Component

// WRITE handleLike FX THAT DOES THE FOLLOWING:
//      ON CLICK OF THE LIKE BUTTON, LOOK AT THE PAINTING THAT WAS LIKED
//      IN THE GLOBAL STATE, UPDATE THE addedLike (or something like this)
//      TO "TRUE". THEN, DISABLE THE LIKE BUTTON FOR THAT PAINTING.

// WHEN THE USER LEAVES THE GALLERY, UPDATE THE DATABASE OF PAINTINGS
// BY LOOKING AT THE GLOBAL STATE. IF, WHEN THE USER LEFT THE GALLERY,
// A PAINTING HAD AN addedLike VALUE OF "TRUE", INCREMENT THE LIKE VALUE OF
// THAT PAINTINGS DOC OBJ BY 1


const Gallery = () => {
    return (

        //  FROM THE GLOBAL STATE,
        //  MAP THE SHOWN PAINTINGS USING THE ShownPainting COMPONENT
        //  TO GENERATE THE PICTURES IN THE GALLERY

        <ShownPainting
            paintingName={painting.paintingName}
            painter={painting.painter}
            likes={painting.likes}
            src={painting.src}
            handleLike={this.handleLike} // WE WILL EMPOWER THIS COMPONENT WITH THE handleLike FUNCTION ONCE WRITTEN
        />
    )
}

export default Gallery;