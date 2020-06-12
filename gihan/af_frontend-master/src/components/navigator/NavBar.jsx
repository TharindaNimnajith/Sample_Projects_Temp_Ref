import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <a className="nav-item nav-link" href="/covid">Covid</a>
                        <a className="nav-item nav-link" href="/emp">Employee</a>
                 
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
