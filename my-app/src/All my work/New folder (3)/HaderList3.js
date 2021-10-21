import React, { Component } from "react"

class HaderList3 extends Component{

    render() {
 
        const{img, id, title, info} = this.props.item;
        return(
            <div>
                <img 
                    src={img}
                    alt="404"
                    className="img5"
                />
                
                <h5 className="h510">{title}</h5>
                
                <h6 className="h63"><i class="fas fa-user-alt"></i> admin</h6>
                <h6 className="h61"><i class="fas fa-comments icon2"></i> 45 comments </h6>
                <h6 className="h62"><i class="fas fa-calendar-alt icon2"></i> 2017-10-07 </h6>
                
                <p >{info}</p>
                <a href="#"> Read More <i class="fas fa-long-arrow-alt-right"></i> </a>

            </div>
        )
    }
}

export default HaderList3;