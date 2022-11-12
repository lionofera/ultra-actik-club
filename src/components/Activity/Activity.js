import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {id, name, time, img} = props.activity;
    //console.log(props.activity);
   
    return (
        <div className='activity'>
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <h6>Time: {time}min</h6>
            <button onClick={() => props.handleAddActToCart(props.activity)} className='btn-activity'>
                <p>Select Activity</p>
            </button>
        </div>
    );
};

export default Activity;