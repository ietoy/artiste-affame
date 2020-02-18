import React from "react";

// This component generates paintings for the user to view in the gallery
function FramedPainting(props) {

    // This card/container will hold the painting image, title, and like button
    <div>
        <img src={props.img}/>
        <hr/>
        <p>{props.title}</p>
        {/* WRITE THE handleLike FUNCTION, FIND OUT WHERE TO HOUSE IT */}
        <button onClick={() => props.handleLike(props.id)}>
            <i class="far fa-thumbs-up">like button</i>
        </button>
    </div>

}

export default FramedPaintings;