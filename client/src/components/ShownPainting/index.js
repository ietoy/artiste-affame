import React from "react";
import "./style.css"
const ShownPainting = (props) => {

// class ShownPainting extends Component {

// }

    console.log(props)


    let btnActive;

    if (props.btnActive) {
        console.log("If condition!")
        btnActive = "waves-effect waves-light btn "
    } else {
        console.log("Else condition!")
        btnActive = "waves-effect waves-light btn disabled"
    }


    return (
        <div className="card">
            <div className="card-image">
                <img src={props.src} />
            </div>
            <div className="card-content">
                <h5 className="left">
                    {props.paintingName}
                </h5>
                <h6 className="right">
                    {props.likes}
                    <a
                        id={props.id}
                        className={btnActive}
                        onClick={() => {
                            props.likePainting(props.id); 
                        }}
                    >
                        <i class="fas fa-thumbs-up"></i>
                    </a>
                </h6>
                <br />
            </div>
        </div>
    )
}

export default ShownPainting;