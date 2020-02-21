import React, { Fragment, useState } from 'react';
import Canvas from "../../components/Canvas";
import ColorPalette from '../../components/ColorPalette';
import Consumer from '../../configContext';
import API from '../../utils/API';

function Studio() {

    const [studioState, setStudioState] = useState({
        strokeColor: '#EE92C2'
    });

    function changeColor(color){
        setStudioState({ strokeColor: color });
    }

    return (
<Consumer>
{context => {
    let widget =window.cloudinary.createUploadWidget({
    
        cloudName: "artiste-defamme",
        uploadPreset: "f2ahbjhi"},
        (error, result)=>{
           console.log(context.loggedIn);
            if (result.info.files != undefined && context.loggedIn ===true){
                // console.log(result.info.files[0]);
                let painting = {
                    painter: context.currentUser._id,
                    name: result.info.files[0].name,
                    src: result.info.files[0].uploadInfo.url,
                }
                console.log(painting);
                API.addPainting(painting, context.currentUser._id).then( res => {
                    console.log("\n\n", res);
                })

            }
            else if (error){
                console.log("I AM AN ERROR", error)
            }
           
        }
    )

    function showWidget(widget){
        widget.open()
    }

return(



    <div className="container grey lighten-2">
    <Fragment>
        <h3 className="display-4" style={{ textAlign: 'center' }}> <i className="fas fa-brush"></i> Express yourself <i className="fas fa-brush"></i></h3>


        <div className="my-5 row">

            <div className="col s2 color-guide">
                <div className="" ><i className="fas fa-palette"></i> Color Guide</div>

                <ColorPalette changeColor={changeColor}/>

            </div>

            <div className="container col s10">
                <Canvas strokeColor={studioState.strokeColor} />
            </div>

        </div>

    </Fragment>
    <div>
    <button onClick={showWidget(widget)}>Upload Photo</button>
    </div>
</div>


)

}}


</Consumer>
  
    );
}

export default Studio;