import React, { Component } from 'react';
import BlogsView from "./BlogsView";

export default class BlogsData extends Component {

    state = {
       data: [
           {
               id: 1,
               city: "Kashmir",
               img: "./img/kashmir.jpg",
               name: "Neelum valley",
               info: "last year i visit there i enjoy that place so much i dont know why bit i enjoy last year i visit there i enjoy that place so much i dont know why bit i enjoy"
           },
           {
            id: 2,
            city: "Islamabad",
            img: "./img/faisal.jpg",
            name: "Faisal Mosque",
            info: "last year i visit there i enjoy that place so much i dont know why bit i enjoy last year i visit there i enjoy that place so much i dont know why bit i enjoy"
        },
        {
            id: 3,
            city: "Gilgit",
            img: "./img/Gilgat.jpg",
            name: "Gilgat",
            info: "last year i visit there i enjoy that place so much i dont know why bit i enjoy last year i visit there i enjoy that place so much i dont know why bit i enjoy"
        },
        {
            id: 4,
            city: "Muzaffarabad",
            img: "./img/logo1.jpg",
            name: "Bhag",
            info: "last year i visit there i enjoy that place so much i dont know why bit i enjoy last year i visit there i enjoy that place so much i dont know why bit i enjoy"
        },
        {
            id: 5,
            city: "Hunza",
            img: "./img/logo3.jpg",
            name: "Shangrila Resorts",
            info: "last year i visit there i enjoy that place so much i dont know why bit i enjoy last year i visit there i enjoy that place so much i dont know why bit i enjoy"
        }
       ]
    }
    render() {
        return (
            <div className="div26">
                {
                    this.state.data.map(user => (
                        <BlogsView key={user.id} user={user} />
                    ))
                }
            </div>
        )
    }
}
