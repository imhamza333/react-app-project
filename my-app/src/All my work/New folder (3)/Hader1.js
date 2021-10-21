import React, { Component } from "react";
import HaderList2 from "./HaderList2";

class Hader1 extends Component {

    state={
        items:[
            {   
                id: 1,
                img: "./img/img18.jpg",
                name: "Mobile",
                price: "$225.00"
            },
            {
                id: 2,
                img: "./img/img19.jpg",
                name: "DSLR Camra",
                price: "$525.00"
            },
            {
                id: 3,
                img: "./img/img20.jpg",
                name: "Fan",
                price: "$425.00"
            },
            {
                id: 4,
                img: "./img/img12.jpg",
                name: "HeadPhone",
                price: "$225.00"
            },
            {
                id: 5,
                img: "./img/img11.jpg",
                name: "Camra",
                price: "$335.00"
            }
        ]
    }
    render() {
        return(
            <div >
                <div className="div17">
                    <h5 className="h5">FEATURED PRODUCT</h5>
                    <hr className="hr"/>
                </div>
                <div className="div14">
                    {
                        this.state.items.map(item => (
                            <HaderList2 key={item.id} item={item} />
                        ))
                    }
            </div>
        </div>
        )
    }
}

export default Hader1;