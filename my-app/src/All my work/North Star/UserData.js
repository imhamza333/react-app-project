import React, { Component } from 'react';
import AskQue from "./AskQue";
import User from './User';

class UserData extends Component {

    state = {
       data: [
        {   id: 1,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        },
        {   id: 2,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        },
        {   
            id: 3,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        },
        {   
            id: 4,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        },
        {   
            id: 5,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        },
        {   
            id: 6,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        },
        {   
            id: 7,
            title: "what is the best way to to visite turkey",
            para: "what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkey what is the best way to to visite turkeywhat is the best way to to visite turkey ",
            logo: "0"
        }

       ]
    }
    render() {
        return (
            <div >
                {this.state.data.map(user => (
                    <AskQue key={user.id} user={user} /> 
                ))}
            </div>
        )
    }
}

export default UserData;