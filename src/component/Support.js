import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import supportImg from './support.jpg'

const Support = () => {
    
    const bgStyle = {
        width:'100%',
        height: '60vw',
        background: 'linear-gradient(135deg, #afd9df, #76d0cf, #a8c6d2, #75b2ce, #d5d8d6)',
    };

    const h1Style = {
        marginTop: '5vw',
        fontSize: '4.5vw',
        textAlign: 'left',
        marginLeft: '5vw'
    }

    const h3Style = {
        marginTop: '10vw',
        fontSize: '1.8vw',
        textAlign: 'left',
        marginLeft: '5vw'
    }

    const pStyle = {
        fontSize: '1.5vw',
        textAlign: 'left',
        marginLeft: '5vw'
    }

    const techImg = {
        width: '80%',
        height: '40vw',
        marginTop: '5vw',
        borderRadius: '0 50px 0 0', // 10px curve on the top right
        objectFit: 'cover'
    }


    return (
        
        <div className="fluid-container">
            <div className="row" style={bgStyle}>
                <div className="col-md-6">
                    <h1 style={h1Style}>Expert Support</h1>
                    <p style={pStyle}>Faulty phone battery? Slow laptop? We have in-house tech experts who can assist you.</p>
                    <p style={pStyle}>Visit us in stores!</p>
                    <h3 style={h3Style}><bold>OUR LOCATION</bold></h3>
                    <p style={pStyle}>123 Anywhere St.</p>
                    <p style={pStyle}>Any City, State, Any Country</p>
                    <p style={pStyle}>123-456-7890</p>
                </div>
                <div className="col-md-6">
                    <img src={supportImg} alt="support page photo" style={techImg} />
                </div>
            </div>
        </div>
    );
}

export default Support;
