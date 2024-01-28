import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import techImage from './tech.jpg'

const New = () => {
    const bgStyle = {
        width:'100%',
        height: '50vw',
        background: 'linear-gradient(135deg, #afd9df, #76d0cf, #a8c6d2, #75b2ce, #d5d8d6)',
    };

    const h1Style = {
        marginTop: '10vw',
        fontSize: '4.5vw',
        textAlign: 'left',
        marginLeft: '5vw'
    }

    const pStyle = {
        fontSize: '2vw',
        textAlign: 'left',
        marginLeft: '5vw'
    }

    const techImg = {
        width: 'auto',
        height: '40vw',
        marginTop: '5vw',
        borderRadius: '0 50px 0 0' // 10px curve on the top right
    }

     return (
        <div className="fluid-container">
            <div className="row" style={bgStyle}>
                <div className="col-md-6">
                    <h1 style={h1Style}>All-new technology</h1>
                    <p className="font-size-2" style={pStyle}>News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.</p>
                </div>
                <div className="col-md-6">
                    <img src={techImage} alt="tech" style={techImg} />
                </div>
            </div>
        </div>
    );
}

export default New;