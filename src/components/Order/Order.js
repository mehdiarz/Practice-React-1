import React from "react";

import Wrapper from "../../hoc/Wrapper";

const Order =(props) => {
    const orders = Object.keys(props.products).map((item)=>{
        return(
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })
    return(
        <Wrapper>
            <h3>Order</h3>
            <ul>
                {orders}
            </ul>
        
        </Wrapper>
    )
}

export default Order