import React, { Component } from "react"
import HaderList from "./HaderList"

class HaderData extends Component {

    state = {
        pics: [
            {
                id: "1",
                img: "./img/img6.jpg"
                
            },
            {
                id: "2",
                img: "./img/img8.jpg"
                
            },
            {
                id: "3",
                img: "./img/img7.jpg" 
                
            }
        ]

    }
    render() {
        return (
            <div className="card1">
                   {
                    this.state.pics.map (yes => (
                        <HaderList key={yes.id} yes={yes} />
                    ))}

            </div>
        )
    }
}

export default HaderData;