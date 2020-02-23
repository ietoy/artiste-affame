import React, { Fragment, useState } from 'react';
import Canvas from "../../components/Canvas";
import ColorPalette from '../../components/ColorPalette';
import Consumer from '../../configContext';
import API from '../../utils/API';
import axios from 'axios';
import Modal from "../../components/Modal";

function Studio() {

    const [studioState, setStudioState] = useState({
        strokeColor: '#EE92C2'
    });


    function changeColor(color) {
        setStudioState({ strokeColor: color });
    }
//need these for modal functionality
    const toggleModalOn = () => {
        setModalState({ isOpen: true});
    }
    const toggleModalOff = () => {
        setModalState({ isOpen: false});
    }
    const [modalState, setModalState] = useState({
        isOpen: false,
        onClose: toggleModalOff,

    })
  
    return (
        <Consumer>
            {context => {
                function changeHandler(event) {
                    event.preventDefault();
                    if (!context.loggedIn) {
                        //toggling the modal on
                        toggleModalOn();
                    } else {
                        var formData = new FormData();
                        formData.append("file", event.target.files[0]);
                        formData.append("upload_preset", "f2ahbjhi");
                        formData.append("api_key", "878159185894491");
                        formData.append("timestamp", (Date.now() / 1000) | 0);
                        axios.post("https://api.cloudinary.com/v1_1/artiste-defamme/image/upload", formData, {
                            headers: { "X-Requested-With": "XMLHttpRequest" },
                        }).then(response => {
                            const data = response.data;
                            const fileURL = data.secure_url;

                            let painting = {
                                painter: context.currentUser._id,
                                name: response.data.original_filename,
                                src: fileURL
                            }
                            API.addPainting(painting, context.currentUser._id).then(res => {
                                console.log("thisistheres", res)
                            }).catch(err => {

                            })
                        })
                    }
                }



                return (



                    <div className="container grey lighten-2">
                        <Fragment>
                            <h3 className="display-4" style={{ textAlign: 'center' }}> <i className="fas fa-brush"></i> Express yourself <i className="fas fa-brush"></i></h3>


                            <div className="row">

                                <div className="col color-guide">
                                    <div className="" ><i className="fas fa-palette"></i> Color Guide</div>

                                    <ColorPalette changeColor={changeColor} />

                                </div>
{/* className="container col" */}
                                <div >
                                    <Canvas strokeColor={studioState.strokeColor} />
                                </div>

                            </div>
                            {/* must pass these two props or it wont work, the children can make it unique, must go in fragment i think... */}
                            <Modal show={modalState.isOpen}
                            onClose={toggleModalOff}>
                           <h1>what the heck</h1>
                             </Modal>
                     
                           
                        </Fragment>
                  
                        <div>
                            <input name="file" type="file" class="cloudinary-fileupload" data-cloudinary-field="image_id"
                                data-form-data="&quot;upload_preset&quot;:&quot;user_upload1&quot;" onChange={changeHandler}></input>
                        </div>
                    </div>


                )

            }}
      

        </Consumer>


    );
}

export default Studio;
