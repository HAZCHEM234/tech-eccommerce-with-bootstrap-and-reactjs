import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import companyImage from './company logo.webp';
import s24Image from './s24.webp';


const Fronts = () => {
    
    

    // background
    const bgStyle = {
        height: '50vw',
        background: 'linear-gradient(45deg, #afd9df, #76d0cf, #a8c6d2, #75b2ce, #d5d8d6)',
        width:'100%'
    };

    // logo
    const logoStyle = {
        width: '10%', 
        height: 'auto',
        marginTop: '5vw',
        marginRight: '30vw'
    }

    // h1 style
    const h1Style = {
        marginTop: '13vw',
        fontSize: '4.5vw',
    }

    // button buy now
    const buttonStyle = {
        marginTop: '10vw',
        marginRight: '3vw',
        borderRadius: '40px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2vw',
    }

    // button shop all
    const buttonStyle1 = {
        marginTop: '10vw',
        marginRight: '13vw',
        borderRadius: '40px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2vw',
        opacity: '0.5',
    }
    // s24 images
    const s24s = {
        width: '80%', 
        height: 'auto',
        marginTop: '10vw'
    
    }
    

    // JSX
    return (
        <div className="fluid-container">
            <div className="row" style={bgStyle}>
                <div className="col-md-6">
                    <img src={companyImage} alt='logo' style={logoStyle} />
                    <h1 style={h1Style}>The All New <strong>S24+</strong></h1>
                    <button className="btn btn-primary" style={buttonStyle}><strong>Buy Now</strong></button>
                    <button className="btn btn-secondary" style={buttonStyle1}>Shop All</button>
                </div>
                <div className="col-md-6">
                    <img src={s24Image} alt='s24' style={s24s}/>
                </div>
            </div>
        </div>
    );
}

export default Fronts;
