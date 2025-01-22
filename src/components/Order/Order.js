import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Button from "../UI/Button/Button";

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
            <p>Total Price : {props.totalPrice}</p>
            <p>Continue?!</p>
            <Button btnType = "success" click={props.continue}>YES</Button>
            <Button btnType = "danger" click={props.cancel}>NO</Button>
        </Wrapper>
    )
}

export default Order