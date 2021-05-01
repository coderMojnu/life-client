import React, { useEffect, useState } from 'react';
import Day from './Day';

const FindMyDay = () => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch('https://radiant-basin-81557.herokuapp.com/myDays')
        .then(res => res.json())
        .then(data => setDays(data))
    }, [])
    console.log(days)
    return (
        <div>
            {
                days.map(day => <Day day={day}></Day>)
            }
        </div>
    );
};

export default FindMyDay;