import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setActivities(data))
    }, [])

    const [breakTime, setBreakTime] = useState([]);

    const handleAddActToCart = (activity)=> {
        console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }

    let total = 0;
    for(let activity of cart) {
        total = parseInt(total) + parseInt(activity.time);
    }

    const handleSetBreak = (event) => {
        setBreakTime(event.target.innerText);
    }

    return (
        <div className='main'>
            <div className='cards-body'>
                <h1>My-Activ-Day</h1>
               <div className='activity-container'>
                {
                    activities.map(activity =><Activity
                    key={activity.id}
                    activity = {activity}
                    handleAddActToCart = {handleAddActToCart}
                    ></Activity>)
                }
               </div>

            </div>
            <div className='counter-body'>
                <h3>David Peterson</h3>
                <h4>Add a break</h4>
                <div className='break-btn'>
                    <p onClick={handleSetBreak}>10m</p>
                    <p onClick={handleSetBreak}>15m</p>
                    <p onClick={handleSetBreak}>20m</p>
                    <p onClick={handleSetBreak}>30m</p>
                </div>
                <p>Total active time: min{total}
                </p>
                <h6>Break taken:{breakTime}</h6>
                <button>Task Completed!</button>
            </div>
        </div>
    );
};

export default Main;