import React, { Fragment, useState } from 'react';
import Canvas from "../../components/Canvas";
import ColorPalette from '../../components/ColorPalette';

function Studio() {

    const [studioState, setStudioState] = useState({
        strokeColor: '#EE92C2'
    });

    function changeColor(color){
        setStudioState({ strokeColor: color });
    }

    return (

        <div className="my-5 p-4 container bg-light">
            <Fragment>
                <h3 className="display-4" style={{ textAlign: 'center' }}> <i className="fas fa-brush"></i> Express yourself <i className="fas fa-brush"></i></h3>


                <div className="my-5 row">

                    <div className="col-2 color-guide">
                        <div className="" ><i className="fas fa-palette"></i> Color Guide</div>

                        <ColorPalette changeColor={changeColor}/>

                    </div>

                    <div className="col-10 d-flex justify-content-center">
                        <Canvas strokeColor={studioState.strokeColor} />
                    </div>

                </div>

            </Fragment>

        </div>


    );
}

export default Studio;