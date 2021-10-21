import React from 'react'
import {ProductConsumer} from "./context";
import styled from "styled-components"

export default function SideCart() {
    return (
        <div>

        </div>
        // <ProductConsumer>
        //     {value => {
        //         const {cartOpen, closeCart, cart} = value
        //         return( 
        //         <CartWrapper className="cart" show={cartOpen} onClick={closeCart}>
        //             <p>cart items</p>
        //         </CartWrapper>
        //     )
        //         }}
        // </ProductConsumer>
    )
}

// const CartWrapper = styled.nav`
//     position: fixed;
//     top: 61px;
//     left: 0;
//     width: 20%;
//     height: 100%;
//     z-index: 1;
//     border-left: 4px solid #5fb7ea;
//     transition: Transition;
//     transform: ${props => (props.show ? "translateX(0)" :
//          "translateX(100%)")}
//     @media     

// ` 
