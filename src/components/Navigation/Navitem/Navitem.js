import React from "react";

import './Navitem.css'

const Navitem = (props) =>{
    return(
        <li className="nav-item">
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default Navitem