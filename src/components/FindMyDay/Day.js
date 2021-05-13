import React from 'react';

const Day = (props) => {
    const {date, namaj, priorityWork1, priorityWork2, priorityWork3, workDone, valoKaj, ayat, hadith, motivation, idea, gonah, email} = props.day;
    return (
        <div className="container">
            <h1>{date}</h1>
            <p style={{color: 'red'}}>{email}</p>
            <ul>
                <li>{priorityWork1}</li>
                <li>{priorityWork2}</li>
                <li>{priorityWork3}</li>
            </ul>
        </div>
    );
};

export default Day;