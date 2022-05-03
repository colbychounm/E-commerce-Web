import React from "react";
import { categories } from "./data";

import './Categories.scss';

class Categories extends React.Component {
    render() {
        return (
            <div className="categories-container">
                <div className="categories-wrapper">
                    {
                        categories.map((item) => {
                            return <div key={item.id} style={{ background: `url(${item.img})`, backgroundSize: 'cover' }} className="categories">
                                <div className="categories-title">{item.title}</div>
                                <form action="/product">
                                    <button>SHOP NOW</button>
                                </form>
                            </div>
                        })
                    }

                </div>
            </div>
        )
    }
}

export default Categories;