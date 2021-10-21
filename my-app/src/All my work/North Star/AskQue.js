import React, { Component } from 'react'

export default class AskQue extends Component {

    state = {
        vote: 3,
        name: "Votes",
        Ans: "answers"
    }
    

    render() {
        const {title, logo, para} = this.props.user;
        return (
            <div >
                    <div class="card div23">
                        <div className="number">
                            <h4 className="h4">{this.state.vote}</h4>
                            <h6 className="h6">{this.state.name}</h6>

                        </div>
                         <div className="number1">
                            <h4 className="h4">{this.state.vote}</h4>
                            <h6 className="h60">{this.state.Ans}</h6>

                        </div> 
                        <div className="div22">
                            <h4 className="heading1 card-title text-primary ">{title} </h4>
                            <p card-text>{para} </p>
                            <p className="text-secondary">asked by <strong>HAMZA</strong> in <strong>Pakistan</strong> on <strong>July 27th 2015</strong></p>
                        </div> 
                    </div>
            </div>
        )
    }
}
