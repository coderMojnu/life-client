import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-item-1">
                <p>Developed by Mojnu</p>
            </div>
            <div className="footer-item-2">
                <p><a href="mailto:mojnu.cse.pust@gmail.com">mojnu.cse.pust@gmail.com</a></p>
            </div>
            <div className="footer-item-3">
                <ul>
                    <li><a href="https://www.facebook.com/codermojnu">Facebook</a></li>
                    <li><a href="https://www.github.com/coderMojnu">Github</a></li>
                    <li><a href="https://www.linkedIn.com/codermojnu">LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer-item-4">
                <p>&copy; Jibon.games 2021</p>
            </div>
         </footer>   
    );
};

export default Footer;;