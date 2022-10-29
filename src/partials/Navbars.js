import React from 'react'
import { Link } from 'react-router-dom'

function Navbars() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ict Park</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/request">Make Request</a>
                            <a className="nav-link" href="/report">Monthly Report</a>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" href="/login"> Login </a>
                            <a className="nav-link" href="/register"> Register </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbars