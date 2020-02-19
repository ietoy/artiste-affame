import React from "react";

// This component generates paintings for the user to view in the gallery







function ShownPainting(props) {

    // This card/container will hold the painting image, title, and like button
    <div>
        <img src={props.src}/>

        <hr/>
        
        <p>{props.paintingName}</p>
        
        <p>by {props.painter}</p>

        <p>{props.likes} likes!</p>
        
        {/* WRITE THE handleLike FUNCTION, FIND OUT WHERE TO HOUSE IT */}
        <button onClick={() => props.handleLike(props.id)}>
            <i class="fas fa-thumbs-up">like button</i>
        </button>

    </div>

}

export default ShownPainting;