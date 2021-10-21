import React, { Component } from "react"


class HaderList extends Component {
    
    render () {

        const {id, img} = this.props.yes;


        return(
            <div >
                <div>
                    <img 
                        src={img}
                        alt="404"
                        className="card-img"
                    /> 
                </div>
                
                    
                    
                
            </div>
        )
    }
}

export default HaderList;