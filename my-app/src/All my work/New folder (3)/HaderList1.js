import React, { Component } from "react"


class HaderList1 extends Component {
    render () {
        const{id, img, name, price } = this.props.prod;
        return (
            <div>
                <div>
                        <div className="div10">
                        <img 
                            className="card-img "
                            src={img}
                            alt="404"
                        />
                    </div>
                        <h5 className="text-center">{name}</h5>
                        <i class="far fa-star icon2"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        
                        <h6 className="text-center text-primary h60">{price}</h6>
                </div>
            </div>
        )
    }
}

export default HaderList1;