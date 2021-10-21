import React, { Component } from "react"
import HaderList1 from "./HaderList1"
import img02 from "./img02.png"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"



class Hader extends Component {

    state= {
      prods:  [
            {
                id: 1,
                name: "Headphone",
                price: "$100.00",
                img: "./img/img01.jpg"
            },
            {
                id: 1,
                name: "Mobile",
                price: "$500.00",
                img: "./img/img03.jpg"
            },
            {
                id: 1,
                name: "Watch",
                price: "$50.00",
                img: "./img/img05.jpg"
            }
        ]
        
    }
    render() {
        return (
            <div>
                <div className="div8">
                  <img 
                    src={img02}
                    alt="404"
                    className="img1"
                  />
                </div>
                <div className="div9">
                    <nav class="nav">
                        <a class="nav-link" href="#">NEW ARRIVALS</a>
                        <a class="nav-link" href="#">BEST SELLER</a>
                        <a class="nav-link" href="#">LATEST PRODUCTS</a>
                    </nav>

                </div>
                <div className="card2">
                    {
                        this.state.prods.map(prod => (
                            <HaderList1 key={prod.id} prod={prod} />
                        ))}
                </div>
                <div className="div11">
                    <div className="div12">
                        <img 
                            src={img3}
                            alt="404"
                            className="img2"
                        />
                    </div>
                    <div className="div13">
                        <img 
                            src={img4}
                            alt="404"
                            className="img3"
                        />
                    </div>
                </div>

                
                    
            </div>
        )
    }
}

export default Hader;