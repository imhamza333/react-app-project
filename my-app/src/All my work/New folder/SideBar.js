import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ProductConsumer} from "./context"

export default function SideBar() {
    
    return (
        <ProductConsumer >
            {value => {
                const {links, sideBarOpen, handleSideBar} = value
                return( 
                    <SideWrapper show={sideBarOpen}>
                    {/* <div className="side" show={sideBarOpen}> */}
                        <ul  className="ul1">
                        {links.map(link => {
                            return(
                                <li key={link.id}>
                                    <Link to={link.path}
                                        className="sidebar-link"
                                        onClick={handleSideBar}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                        </SideWrapper>
                )
            }

            }

        </ProductConsumer>
    )
}

 const SideWrapper = styled.nav`
    position: fixed;
    top: 60px;
    left: 0; 
    width: 20%;
    margin: 15px 0 0 0px;
    height: 100%;
    background: white ;
    z-index: 1;
    border-right: 4px solid #5fb7ea ;
    transform: ${props => (props.show ? "translateX(0)" :
    "translateX(-100%)")}
        //  ul{
        //  padding: 0 ;
        //  list-style-type: none;
        //  }
        // .sidebar-link{
        //     display: block;
        //     font-size: 1.5rem;
        //     text-transform: capitalize;
        //     color: black;
        //     padding: 0.5rem 1.5rem;
        //     background: transparent;
        //     }
        //     .sidebar-link:hover {
        //         background: #5fb7ea ;
        //         color: white;
        //         text-decoration: none;
        //         padding: 0.5rem 1.5rem 0.5rem 2.5rem;
        //     }
            

`
