import React from "react";

import Wrapper from "../../hoc/Wrapper";
import './Layout.css'
import Navbar from "../Navigation/Navbar/Navbar";

const Layout = (props) => {
    return(
        <Wrapper>
            <div>
                <Navbar></Navbar>
            </div>
            <main className="content ">{props.children}</main>
        </Wrapper>
    )
}

export default Layout