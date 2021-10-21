import React, { Component } from "react";
import BlogsData from "./BlogsData";
import Footer from "./Footer";
import cover3 from "./cover3.jpg"
import logo0 from "./logo0.jpg";


class Blogs extends Component {
    render () {
        return (
            <div className="div32">
                <img src={cover3} className="img6" />
                  <BlogsData />
                  <Footer />
            </div>
        )
    }
}

export default Blogs;