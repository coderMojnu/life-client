import React from 'react';
import './Navbar.css';
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(85, 9, 224)'}}>
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">জীবনের হিসাব</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/find-my-day">Find My Day</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/add-my-day">Add My Day</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/about">About</a>
                        </li>
                        <li className="nav-item me-5">
                         <a className="nav-link active" href="/login">{user?.email?<p style={{fontWeight: 'bold'}}>{user.name}</p>:'Login'}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;