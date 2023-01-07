import React from 'react'
import { Link } from 'react-router-dom';


export function Navbar(){
    const makeNavItemActiveOnClick = (e)=>{
        
        let links = document.getElementsByClassName('nav-link')
        for (let element of links)
        {
            element.className = 'nav-link'
            element.style.fontWeight = 'normal'
        }

        e.target.className = 'nav-link active'
        e.target.style.fontWeight = 'bold';
    }
    return (
            <>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">iNews24x7</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link active" style={{fontWeight:'bold'}} aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/technology">Technology</Link></li>
                                <li className="nav-item" onClick={makeNavItemActiveOnClick}><Link className="nav-link" to="/">General</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
}


export default Navbar;