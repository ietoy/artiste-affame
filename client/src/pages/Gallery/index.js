// import React from "react";

import ShownPainting from "../../components/ShownPainting/index";
import Wrapper from "../../components/Wrapper/index";
import axios from "axios";
import API from "../../utils/API";
import {Dropzone ,React} from 'react-dropzone';
import {useDropzone} from 'react-dropzone'
// import Cloudinary from "cloudinary";
// This page shows all paintings currently on display in the Gallery.
// Players can offer likes to paintings made by other players, but only once per painting
// This page will use the ShownPainting Component
import Consumer from "../../configContext.js";
///////aksdjfhl;awfdjhliadjwhf

// WRITE handleLike FX THAT DOES THE FOLLOWING:
//      ON CLICK OF THE LIKE BUTTON, LOOK AT THE PAINTING THAT WAS LIKED
//      IN THE GLOBAL STATE, UPDATE THE addedLike (or something like this)
//      TO "TRUE". THEN, DISABLE THE LIKE BUTTON FOR THAT PAINTING.

// WHEN THE USER LEAVES THE GALLERY, UPDATE THE DATABASE OF PAINTINGS
// BY LOOKING AT THE GLOBAL STATE. IF, WHEN THE USER LEFT THE GALLERY,
// A PAINTING HAD AN addedLike VALUE OF "TRUE", INCREMENT THE LIKE VALUE OF
// THAT PAINTINGS DOC OBJ BY 1

const cheesey = () => {
axios.get("https://878159185894491:FhJy3Dc_yVACl6gaPFwLALrLjkg@api.cloudinary.com/v1_1/artiste-defamme/resources/image").then(res => {
    console.log(res);
    return res;
})
}
// cheesey();
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
                        {cheesey()}
                        {loadGallery()}
                        <div className="container section">
                            <div className="center">
                                <h1>Gallery</h1>
                                <br />
                                <hr />
                            </div>

                            <div className="row">
                                {context.gallery.map(painting => (
                                    // console.log(painting);

                                    // review this with team
                                    <ShownPainting
                                        id={painting._id}
                                        src={painting.src}
                                        paintingName={painting.paintingName}
                                        likes={painting.likes}
                                    />

                                ))}
                            </div>
                        </div>
                      
                    </Wrapper>
                )
            }}
        </Consumer>
    )
}

export default Gallery;