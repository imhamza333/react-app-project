import React from 'react'
import styled from "styled-components"
import pic from "./pic.jpeg"
import logo1 from "./logo1.jpg"

export default function Hero({img, title, max, children}) {
    return (
        <HeroWrapper  >
             <div className="banner" img={img} max={max}>
                <h1 className="title">
                    {title}
                </h1>
                {children}
            </div> 
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div `
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:   ${props => (props.max  ? "100vh":
         "60vh")}
    color: white;
    
    background: url(${props => props.img}) center/cover 
        no-repeat;
    
`
