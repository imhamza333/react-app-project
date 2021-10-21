import React, { Component } from "react";
import UserNav from "./UserNav";
import UsersData from "./UsersData";
import Footer from "./Footer";
import cover from "./cover.jpg";


class User extends Component {
    render () {
        return (
            <div >
            
               <UserNav />
               <UsersData />
               <Footer />
                
                 
            </div>
        )
    }
}

export default User;