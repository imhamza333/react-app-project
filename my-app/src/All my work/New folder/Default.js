import React from 'react'
import Hero from "./Hero"
import pic from "./pic.jpeg"
import logo1 from "./logo1.jpg"
import {Link} from "react-router-dom"

export default function Default() {
    return (
              <Hero img={logo1} title="404" max="true">
                <h2>
                    PAGE NOT FOUND
                </h2>
                <Link to="/" className="main-link">
                    return home
                </Link> 
            </Hero>  
        
    )
}
