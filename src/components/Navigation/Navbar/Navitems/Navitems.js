import React from "react";

import Navitem from "../../Navitem/Navitem";

import './Navitems.css'


const Navitems = (props) =>{
    return(
        <ul className="nav-items">
            <Navitem link="/">Shopping</Navitem>
            <Navitem link="/">Checkout</Navitem>
        </ul>
    )
}

export default Navitems