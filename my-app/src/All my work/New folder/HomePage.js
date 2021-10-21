import React from 'react'
import Hero from "./Hero"
import {Link } from "react-router-dom"
import pic from "./pic.jpeg"
import img6 from "./img6.jpg"

export default function HomePage() {
    return (
        <Hero img={img6} title="Awesome Gadgets" max="true">
            
            <Link className="main-link" to="/products" >
                OUR PRODUCTS
            </Link>
            
        </Hero>
    )
}

