import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="container margin-top">
            <h1>About</h1>
            <div className="about">
                <div className="item-1"><p><span style={{fontSize: '30px', color: 'red'}}>&#8627;</span> <span className="name">'জীবনের হিসাব'</span> একটি Simple Web Application যার উদ্দ্যেশ্য কোনো ব্যাক্তি তার প্রতিটি দিনের হিসাব যেমন ৫ ওয়াক্ত নামাজ হয়েছে কী'না? আজ গুরুত্বপূর্ণ কি কি কাজ শেষ করেছিলেন? কত টাকা আজ আয় হয়েছিল এবং কত টাকা ব্যয় হয়েছিল প্রভৃতি তার একাউন্টে হিসেব করে রাখা।</p></div>
                <div className="item-2"><p><span style={{fontSize: '30px', color: 'red'}}>&#8627;</span> এবং পরবর্তীতে ব্যবহারকারী কোনো এক তারিখ লিখে সার্চ করলে সে ঐ দিনের হিসাব দেখতে পারবে। <br/> <br/> যারা অগোছোলো লাইফ লিড করছেন। আশা করি- এই সিম্পল ওয়েব এপ্লিকেশনটি ব্যবহারে আপনি আবার গোছালো অবস্থায় ফিরে আসবেন। </p></div> 
                <div className="item-3"><p><span style={{fontSize: '30px', color: 'red'}}>&#8627;</span> আপনি চাইলে আপনার এই দিনের হিসাবগুলা আপনার মা-বাবা, ভাই-বোন বন্ধুর সাথে শেয়ার করতে পারবেন।<br/><br/> আবার, বিয়ের পর বউকে আপনার জীবনের এই হিসাবগুলো দেখিয়ে বলতে পারবেন- তোমাকে পেতে দেখ আমি কত কষ্ট করেছি। </p></div>
            </div>
            <div className="margin-top">
                <h1 className="text-center use">কিভাবে এই ওয়েব অ্যাপটি ব্যবহার করবেন?</h1>
                <div className="uses-niyom">
                    <ul>
                        <li>লগ ইন করা না থাকলে প্রথমে লগ ইন করে নিবেন। </li>
                        <li>তারপর <a href="/add-my-day">Add My Day</a> তে ক্লিক করে ফর্মে থাকা প্রশ্নগুলোর উত্তর ইনপুটে লিখে  'Add This Day' বাটনে ক্লিক করুন।</li>
                        <li>তারপর <a href="/find-my-day">Find My Day</a> তে ক্লিক করে আপনার জীবনের প্রত্যেকটা দিনের হিসাবগুলা দেখতে পারবেন।</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;