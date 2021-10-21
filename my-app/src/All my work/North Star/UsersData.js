import React, { Component } from 'react';
import UserView from "./UserView";

export default class UsersData extends Component {
    
    state= {
        data: [
            {
                id: 1,
                pic: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                name: "Arslan",
                city: "Lahore"
            },
            {
                id: 2,
                pic: "https://randomuser.me/api/portraits/women/89.jpg",
                name: "Stafni",
                city: "Londan"
            },
            {
                id: 3,
                pic: "https://randomuser.me/api/portraits/thumb/men/77.jpg",
                name: "Javed Khan",
                city: "Peshawar"
            },
            {
                id: 4,
                pic: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
                name: "Murad Bughti",
                city: "Quetta"
            },
            {
                id: 5,
                pic: "https://randomuser.me/api/portraits/women/79.jpg",
                name: "Eleiza",
                city: "Dubai"
            },
            {
                id: 6,
                pic: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
                name: "Moiez",
                city: "Lahore"
            },
            {
                id: 7,
                pic: "https://randomuser.me/api/portraits/women/71.jpg",
                name: "Leyona",
                city: "Karachi"
            },
            {
                id: 8,
                pic: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
                name: "Noman",
                city: "Lahore"
            },
            {
                id: 9,
                pic: "https://randomuser.me/api/portraits/women/66.jpg",
                name: "Alex",
                city: "Islambad"
                
            },
        ]
    }

    render() {

        return (
            <div className="div24">
                {
                    this.state.data.map(user =>(
                       <UserView key={user.id} user={user} />  
                ))}
                
            </div>
        )
    }
}
