import React from "react";
import Consumer from "../../configContext.js";
import ShownPainting from "../../components/ShownPainting/index.js";
import Wrapper from "../../components/Wrapper/index.js";
import API from "../../utils/API";

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
        <Consumer>
            {context => {
                function loadGallery() {
                    // console.log(context.gallery)
                    if (context.gallery.length === 0) {
                        API.getGallery()
                            .then(res => {
                                context.loadShownPaintings(res.data);
                            })
                    }
                }
                return (
                    <Wrapper>
                        {loadGallery()}
                        <div className="container section">
                            <div className="row">
                                {context.gallery.map(painting => {
                                    console.log(painting);

                                    // review this with team
                                    <ShownPainting 
                                        src={painting.src}
                                        paintingName={painting.name}
                                        likes={painting.likes}
                                    />

                                })}
                            </div>
                        </div>
                    </Wrapper>
                )
            }}
        </Consumer>
    )
}

export default Gallery;