import React, { Component } from "react";
import ShownPainting from "../../components/ShownPainting/index";
import axios from "axios";
import API from "../../utils/API";
import Style from "./style.css";
// import Cloudinary from "cloudinary";
// This page shows all paintings currently on display in the Gallery.
// Players can offer likes to paintings made by other players, but only once per painting
// This page will use the ShownPainting Component
import Consumer from "../../configContext.js";

class Gallery extends Component {
    state = {
        btnActive: true,
        btnID: ""
    }

    render() {
        return (
            <Consumer>
                {context => {
    
                    // const cloudinaryGallery = () => {
                    //     axios.get("https://878159185894491:FhJy3Dc_yVACl6gaPFwLALrLjkg@api.cloudinary.com/v1_1/artiste-defamme/gallery/resources/image").then(res => {
                    //         console.log("\n\n\n\n\n",res);
                    //         return res;
                    //     })
                    //     }
    
                    function loadGallery () {
                        if (context.gallery.length === 0) {
                            API.getGallery()
                                .then(res => {
                                    context.loadShownPaintings(res.data);
                                })
                        }
                    }

                    function likePainting(id) {
                        // console.log("You liked painting #" + id);
                        API.addLike(id);
                        context.updateLike(id);
                    }
    
                    return (
                        <div>
                            {/* {cloudinaryGallery()} */}
                            {loadGallery()}
                            <div className="center">
                                <h1>Gallery</h1>
                                <br />
                                <hr />
                            </div>
                            <div className="row galleryHolder">
                                {context.gallery.map(painting => (
                                    <ShownPainting
                                        id={painting._id}
                                        src={painting.src}
                                        paintingName={painting.paintingName}
                                        likes={painting.likes}
                                        likePainting={likePainting}
                                        btnActive={this.state.btnActive}
                                        btnID={this.state.btnID}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }    
}
    
export default Gallery;