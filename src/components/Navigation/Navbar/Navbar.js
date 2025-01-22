import React from "react";
 
import Navitems from "./Navitems/Navitems";

import './Navbar.css'

const Navbar =(props) =>{
    return(
        <header className="navbar">
            <nav>
                <Navitems></Navitems>
            </nav>
        </header>
    )
}

export default Navbar