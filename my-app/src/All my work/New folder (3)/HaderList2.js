import React, { Component } from "react"

class Hader1 extends Component {

    
    render() {
        
        const{id, img, price, name,} = this.props.item;
        
        return(
            <div className="div15">
            
                <div className="div16">
                    <img 
                        src={img}
                        alt="404"
                        className="img4"
                    />
                </div>
                        <h5 className="text-center">{name}</h5>
                        <i class="far fa-star icon2"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <br/>
                        <h5 className="text-center text-primary h51">{price}</h5>
            </div>

        )
    }
}

export default Hader1;