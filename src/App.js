import React from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
import './App.css';


function App() {
    const navstyle = {
        color: 'White'
    };

    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">Home</Link>
                <Link style={navstyle} to="/page">Page</Link>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Welcome to React Learning Nilesh Balu Jorwar
                </a>
            </header>
        </div>
    );
}

export default App;
