import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import iphoneImage from './iphone.jpg';
import macImge from './mac.jpg';
import cameraImage from './camera.jpg'

const Shop = () => {
    const bgStyle = {
        height: '60vw',
        background: 'linear-gradient(45deg, #afd9df, #76d0cf, #a8c6d2, #75b2ce, #d5d8d6)',
        width:'100%'
    };

    const contentStyle = {
        height:'40vw',
        background: 'white',
        width: '30vw',
        marginLeft:'2.5vw',
        borderRadius: '0 50px 0 40px'
    }

    const h1Style = {
        fontSize: '4vw'
    }
    
    const h5Style = {
        fontSize: '2.5vw'
    }

    const pStyle = {
        fontSize: '2vw',
    }

    const imgStyle = {
        marginTop: '3vw',
        width: '80%',
        height: '20vw',
        objectFit: 'cover'
    }
    return(
        <div className="fluid-container">
            <div className="row" style={bgStyle}>
                <div className="title">
                        <h1 style={h1Style}>Shop by category</h1>
                </div>
                <div className="col-md-4" style={contentStyle}>
                    <img src={iphoneImage} alt="iphone" style={imgStyle}/>
                    <h5 style={h5Style}>Phones & Accessories</h5>
                    <p style={pStyle}>High class, high-quality phones at affordable prices</p>
                </div>
                <div className="col-md-4 text-center" style={contentStyle}>
                    <img src={macImge} alt="mac" style={imgStyle}/>
                    <h5 style={h5Style}>Computer Equipment</h5>
                    <p style={pStyle}>All your desktop or laptop needs made available</p>
                </div>
                <div className="col-md-4 text-right" style={contentStyle}>
                    <img src={cameraImage} alt="camera" style={imgStyle}/>
                    <h5 style={h5Style}>Miscellaneous items & equipment</h5>
                    <p style={pStyle}>We've got more stuff to meet your techie needs</p>
                </div>
            </div>
        </div>
    )
}

export default Shop;
