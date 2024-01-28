import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Connect = () => {
    const bgStyle = {
        height: '50vw',
        background: 'linear-gradient(45deg, #afd9df, #76d0cf, #a8c6d2, #75b2ce, #d5d8d6)',
        width:'100%'
    };

    const h1Style = {
        fontSize: '4vw',
        marginTop:'8vw'
    }

    const pStyle = {
        fontSize: '2vw',
    }


    const divStyle = {
        width: '50%',
        height: '20vw',
        marginTop:'8vw'
    }

    const emailStyle = {
        fontSize: '2vw',
        marginTop: '5vw'
    }


    return (
        <div className="fluid-container">
            <div className="row" style={bgStyle}>
                <div className="col-md-6">
                    <div className="left">
                        <h1 style={h1Style}>Connect with us</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right">
                        <div className="row">
                            <div className="col-md-6" style={divStyle}>
                                <p style={pStyle}><strong>MAIN OFFICE</strong></p>
                                <p style={pStyle}>123 Anywhere St. Any City, State, Any Country</p>
                                <p style={pStyle}>123-456-7890</p>
                            </div>
                            <div className="col-md-6" style={divStyle}>
                                <p style={pStyle}><strong>Social media</strong></p>
                                <p style={pStyle}>Facebook</p>
                                <p style={pStyle}>Instagram</p>
                                <p style={pStyle}>Twitter</p>
                            </div>
                        </div>
                        <div className="bottomofdiv" >
                            <p style={emailStyle}><strong>hello@reallygreatsite.com</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;
