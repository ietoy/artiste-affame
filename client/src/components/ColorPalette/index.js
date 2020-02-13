import React from "react";

function ColorPalette(props) {

    return (

        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mt-2" role="group" aria-label="Red group">
                <button type="button" className="btn" style={{ background: '#ff8a80' }} onClick={() => {
                    props.changeColor('#ff8a80');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ff5252' }} onClick={() => {
                    props.changeColor('#ff5252');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ff1744' }} onClick={() => {
                    props.changeColor('#ff1744');
                }}></button>
                <button type="button" className="btn" style={{ background: '#d50000' }} onClick={() => {
                    props.changeColor('#d50000');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Pink group">
                <button type="button" className="btn" style={{ background: '#ff80ab' }} onClick={() => {
                    props.changeColor('#ff80ab');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ff4081' }} onClick={() => {
                    props.changeColor('#ff4081');
                }}></button>
                <button type="button" className="btn" style={{ background: '#f50057' }} onClick={() => {
                    props.changeColor('#f50057');
                }}></button>
                <button type="button" className="btn" style={{ background: '#c51162' }} onClick={() => {
                    props.changeColor('#c51162');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Purple group">
                <button type="button" className="btn" style={{ background: '#ea80fc' }} onClick={() => {
                    props.changeColor('#ea80fc');
                }}></button>
                <button type="button" className="btn" style={{ background: '#e040fb' }} onClick={() => {
                    props.changeColor('#e040fb');
                }}></button>
                <button type="button" className="btn" style={{ background: '#d500f9' }} onClick={() => {
                    props.changeColor('#d500f9');
                }}></button>
                <button type="button" className="btn" style={{ background: '#aa00ff' }} onClick={() => {
                    props.changeColor('#aa00ff');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Deep Purple group">
                <button type="button" className="btn" style={{ background: '#b388ff' }} onClick={() => {
                    props.changeColor('#b388ff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#7c4dff' }} onClick={() => {
                    props.changeColor('#7c4dff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#651fff' }} onClick={() => {
                    props.changeColor('#651fff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#6200ea' }} onClick={() => {
                    props.changeColor('#6200ea');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Indigo group">
                <button type="button" className="btn" style={{ background: '#8c9eff' }} onClick={() => {
                    props.changeColor('#8c9eff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#536dfe' }} onClick={() => {
                    props.changeColor('#536dfe');
                }}></button>
                <button type="button" className="btn" style={{ background: '#3d5afe' }} onClick={() => {
                    props.changeColor('#3d5afe');
                }}></button>
                <button type="button" className="btn" style={{ background: '#304ffe' }} onClick={() => {
                    props.changeColor('#304ffe');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Ligth Blue group">
                <button type="button" className="btn" style={{ background: '#b3e5fc' }} onClick={() => {
                    props.changeColor('#b3e5fc');
                }}></button>
                <button type="button" className="btn" style={{ background: '#40c4ff' }} onClick={() => {
                    props.changeColor('#40c4ff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#00b0ff' }} onClick={() => {
                    props.changeColor('#00b0ff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#0091ea' }} onClick={() => {
                    props.changeColor('#0091ea');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Cyan group">
                <button type="button" className="btn" style={{ background: '#84ffff' }} onClick={() => {
                    props.changeColor('#84ffff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#18ffff' }} onClick={() => {
                    props.changeColor('#18ffff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#00e5ff' }} onClick={() => {
                    props.changeColor('#00e5ff');
                }}></button>
                <button type="button" className="btn" style={{ background: '#00b8d4' }} onClick={() => {
                    props.changeColor('#00b8d4');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Teal group">
                <button type="button" className="btn" style={{ background: '#a7ffeb' }} onClick={() => {
                    props.changeColor('#a7ffeb');
                }}></button>
                <button type="button" className="btn" style={{ background: '#64ffda' }} onClick={() => {
                    props.changeColor('#64ffda');
                }}></button>
                <button type="button" className="btn" style={{ background: '#1de9b6' }} onClick={() => {
                    props.changeColor('#1de9b6');
                }}></button>
                <button type="button" className="btn" style={{ background: '#00bfa5' }} onClick={() => {
                    props.changeColor('#00bfa5');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Green group">
                <button type="button" className="btn" style={{ background: '#b9f6ca' }} onClick={() => {
                    props.changeColor('#b9f6ca');
                }}></button>
                <button type="button" className="btn" style={{ background: '#69f0ae' }} onClick={() => {
                    props.changeColor('#69f0ae');
                }}></button>
                <button type="button" className="btn" style={{ background: '#00e676' }} onClick={() => {
                    props.changeColor('#00e676');
                }}></button>
                <button type="button" className="btn" style={{ background: '#00c853' }} onClick={() => {
                    props.changeColor('#00c853');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Yellow group">
                <button type="button" className="btn" style={{ background: '#ffff8d' }} onClick={() => {
                    props.changeColor('#ffff8d');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ffff00' }} onClick={() => {
                    props.changeColor('#ffff00');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ffea00' }} onClick={() => {
                    props.changeColor('#ffea00');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ffd600' }} onClick={() => {
                    props.changeColor('#ffd600');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Orange group">
                <button type="button" className="btn" style={{ background: '#ffd180' }} onClick={() => {
                    props.changeColor('#ffd180');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ffab40' }} onClick={() => {
                    props.changeColor('#ffab40');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ff9100' }} onClick={() => {
                    props.changeColor('#ff9100');
                }}></button>
                <button type="button" className="btn" style={{ background: '#ff6d00' }} onClick={() => {
                    props.changeColor('#ff6d00');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Brown group">
                <button type="button" className="btn" style={{ background: '#d7ccc8' }} onClick={() => {
                    props.changeColor('#d7ccc8');
                }}></button>
                <button type="button" className="btn" style={{ background: '#a1887f' }} onClick={() => {
                    props.changeColor('#a1887f');
                }}></button>
                <button type="button" className="btn" style={{ background: '#6d4c41' }} onClick={() => {
                    props.changeColor('#6d4c41');
                }}></button>
                <button type="button" className="btn" style={{ background: '#4e342e' }} onClick={() => {
                    props.changeColor('#4e342e');
                }}></button>
            </div>
            <div className="btn-group mt-2" role="group" aria-label="Gray group">
                <button type="button" className="btn" style={{ background: '#eeeeee' }} onClick={() => {
                    props.changeColor('#eeeeee');
                }}></button>
                <button type="button" className="btn" style={{ background: '#bdbdbd' }} onClick={() => {
                    props.changeColor('#bdbdbd');
                }}></button>
                <button type="button" className="btn" style={{ background: '#757575' }} onClick={() => {
                    props.changeColor('#757575');
                }}></button>
                <button type="button" className="btn" style={{ background: '#000000' }} onClick={() => {
                    props.changeColor('#000000');
                }}></button>
            </div>
        </div>

    );
}

export default ColorPalette;