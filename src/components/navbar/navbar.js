import React from 'react';
import {Link} from 'react-router-dom';

import RaspberryImage from '../navbar/assets/raspberry.png';
//import OverviewImage from '../navbar/assets/overview.png';
import '../navbar/navbar.css'

function Navbar(props){

    var show = "show"
    if(props.hide === true){
        show = "show"
    }else if(props.hide === false){
        show = "hide"
    }

    return(
        <div className={"navbar-main bg-dark text-muted " +show}>
            <div>
                <img src={RaspberryImage} height="100px" width="100px" alt=""></img><h3>Freezing Plant</h3>
            </div>
            
            <hr></hr>
            <h4>Username</h4>
            <hr></hr>
            <div className="text-muted">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-muted">Overview</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bill" className="nav-link text-muted" href="#">Bill</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/providers" className="nav-link text-muted" href="#">Providers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link text-muted" href="#">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;