import React from 'react';
import './Greet.css'

const Greet = (props) => {

    return (
        <div>
            {props.h1}
            <h2>Hello {props.name}</h2>
            <p style={{color: 'red'}} >I am {props.age}</p>
            <div style={{border: '3px solid violet',
        width: '300px',
        height: '300px',
        fontSize: '30px', 
        margin: '10px auto'
        }}>Block</div>
            <img className='image' src={props.image} alt="" />
        </div>
    );
};

export default Greet;