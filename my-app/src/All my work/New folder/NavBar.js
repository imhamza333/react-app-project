import React from 'react'
import {FaBars, FaCartPlus} from "react-icons/fa"
import {ProductConsumer} from "./context"
import pic from "./pic.jpeg"

export default function NavBar() {
    return (
        <div>        
            <ProductConsumer>
                {value => {
                        const {handleSideBar, handleCart, cartItem} = value
                        return (
                            <nav className="nav1">
                                <div className="nav-center">
                                    <FaBars className="nav-icon" onClick={handleSideBar} />
                                    <img src={pic} alt="404" className="pic1"/>
                                    <div className="nav-cart">
                                        <FaCartPlus className="nav-icon" onClick={handleCart} />
                                        <div className="cart-items" >
                                            {cartItem}

                                        </div>

                                    </div>

                                </div>
                            </nav>
                        )
                }}
            </ProductConsumer>
        </div>
    )
}

