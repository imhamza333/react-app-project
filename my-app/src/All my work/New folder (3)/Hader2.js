import React, { Component } from "react"
import HaderList3 from "./HaderList3"

class Hader2 extends Component{

    state={
        items: [
            {
                id: 1,
                img: "./img/img1.jpg",
                title: "Winter Morning ShopMart",
                info:   "Intrastin really let see what is this ok butt i show you my self"
                
            },
            {
                id: 2,
                img: "./img/img2.jpg",
                title: "Perfect for Promoting",
                info:   "Ok so this is a i dont know what is this butt it is a thing they are defferent"
                
            },
            {
                id: 3,
                img: "./img/img4.jpg",
                title: "Winter Morning ShopMart",
                info:   "This is a info about product i dont know what is this butt it is ok i got it no you not"
                
            }
        ]
    }
    render() {
        return(
            <div className="div18">
                <div>
                    <h5>LATEST BLOG</h5>
                    <hr className="hr"/>
                </div>
                <div className="div19">
                    {
                        this.state.items.map(item => (
                            <HaderList3 key={item.id} item={item} />
                        ))
                    }

                </div>

            </div>
        )
    }
}

export default Hader2;