import React from 'react';

const Day = (props) => {
    const {date, namaj, priorityWork1, priorityWork2, priorityWork3, workDone, valoKaj, ayat, hadith, motivation, idea, gonah, email} = props.day;
    return (
        <div>
            <h1>{date}</h1>
            <p style={{color: 'red'}}>{email}</p>
        </div>
    );
};

export default Day;