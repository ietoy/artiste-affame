import React, { Fragment, useState } from 'react';
import Canvas from "../../components/Canvas";
import ColorPalette from '../../components/ColorPalette';
import Consumer from '../../configContext';
import API from '../../utils/API';
import axios from 'axios';
import Modal from "../../components/Modal";
import Style from "./style.css";
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



                    <div className="grey lighten-2">
                        <Fragment>
                            <h3 className="display-4" style={{ textAlign: 'center' }}> <i className="fas fa-brush"></i> Express yourself <i className="fas fa-brush"></i></h3>


                            <div className="row">

                                <div className="col color-guide">
                                    <div className="" ><i className="fas fa-palette"></i> Color Guide</div>

                                    <ColorPalette changeColor={changeColor} />

                                </div>
                                <div  >
                                    <Canvas strokeColor={studioState.strokeColor} />
                                </div>

                            </div>
                            {/* must pass these two props or it wont work, the children can make it unique, must go in fragment i think... */}
                            <div >
                            <Modal show={modalState.isOpen}
                            onClose={toggleModalOff}>
                           <h1>Log in to upload!</h1>
                             </Modal>
                            </div>
                   
                     
                           
                        </Fragment>
                  
                        <div class="inputdiv">
                            <h2>Upload your art here!</h2>
                            <input name="file" type="file" class="cloudinary-fileupload" data-cloudinary-field="image_id"
                                onChange={changeHandler}></input>
                        </div>
                    </div>


                )

            }}
      

        </Consumer>


    );
}

export default Studio;
