import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class UserView extends Component {


    render() {

        const {pic, name, city} = this.props.user;

        return (
            <div className="div25">
                <img 
                src={pic} 
                alt="404" 
                className="img4" 
                style={{width:"60px"}} />
                
                <h4>{name} </h4>
                <h4>{city}</h4>
                
                
                
            </div>
        )
    }
}
