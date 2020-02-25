import React, { Fragment, useState, useEffect, useRef } from 'react';
import Canvas from "../../components/Canvas";
import ColorPalette from '../../components/ColorPalette';
import Consumer from '../../configContext';
import API from '../../utils/API';
import axios from 'axios';
import Modal from "../../components/Modal";
import "./style.css";
import html2canvas from 'html2canvas';

function Studio() {

    var src2 = "";
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { height, width } = useWindowDimensions();

    const [studioState, setStudioState] = useState({
        strokeColor: '#EE92C2',
        width: width,
        height: height,
        cwidth: 400,
        cheight: 500
    });


    function changeColor(color) {
        setStudioState({
            strokeColor: color,
            width: width,
            height: height,
            cwidth: 400,
            cheight: 500
        });
        // console.log("STUDIO STATE", studioState);
    }
    //need these for modal functionality
    const toggleModalOn = () => {
        setModalState({ isOpen: true });
    }
    const toggleModalOff = () => {
        setModalState({ isOpen: false });
    }
    const [modalState, setModalState] = useState({
        isOpen: false,
        onClose: toggleModalOff,

    })

    return (
        <Consumer>
            {context => {


                function saveCanvas() {
                    console.log("SAVING CANVAS");
                    var element = document.getElementById("paintCanvas");
                    // console.log("ELEMENT", element);
                    html2canvas(element, {
                        scrollX: -window.scrollX - 7,
                        scrollY: -window.scrollY
                    }).then(function (canvas) {
                        // console.log(canvas);
                        src2 = canvas.toDataURL();
                        let painting = {
                            paintingName: "canvas",
                            painter: context.currentUser._id,
                            src: src2
                        }
                        API.addPainting(painting, context.currentUser._id).then(res => {
                            console.log("ADDING PAINTING", res.data);
                            context.addPainting(res.data);

                        });
                        // document.body.appendChild(canvas);
                    });
                }

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
                            });
                        })
                    }
                }



                return (



                    <div className="grey lighten-2 studioContainer">
                        <Fragment>
                            <h3 className="display-4" style={{ textAlign: 'center' }}> <i className="fas fa-brush"></i> Express yourself <i className="fas fa-brush"></i></h3>

                            <div>
                                <button onClick={saveCanvas}>SAVE CANVAS</button>

                            </div>

                            <div className="row">

                                <div className="col s12 m12 l4 color-guide">
                                    <div className="" ><i className="fas fa-palette"></i> Color Guide</div>

                                    <ColorPalette changeColor={changeColor} />

                                </div>
                                <div className=" col s12 m12 l8">
                                    <Canvas width={studioState.cwidth} height={studioState.cheight} strokeColor={studioState.strokeColor} />
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
