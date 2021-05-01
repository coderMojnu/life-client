import React from 'react';
import About from '../About/About';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="container">
                <About />
            </div>
            <div style={{marginTop: '30px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default Home;