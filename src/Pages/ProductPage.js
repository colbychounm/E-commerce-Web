import React from "react";
import NavBar from "../Components/NavBar";
import Promotion from "../Components/Promotion";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Product from "../Components/Product";

import './ProductPage.scss';

class ProductPage extends React.Component {
    render() {
        return (
            <div className="product-page-container">
                <NavBar />
                <Promotion />
                <div className="product-page">
                    <div className="product-title">Dresses</div>
                    <div className="filter-sort">
                        <div className="left">
                            <div className="text">Filter Products: </div>
                            <select className="options">
                                <option>Yellow</option>
                                <option>Black</option>
                                <option>White</option>
                                <option>Red</option>
                                <option>Green</option>
                                <option>Blue</option>
                            </select>
                            <select className="options">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        <div className="right">
                            <div className="text">Sort Products:</div>
                            <select className="options">
                                <option>Newest</option>
                                <option>Price (isc)</option>
                                <option>Price (desc)</option>
                            </select>
                        </div>
                    </div>
                    <div className="products">
                        <Product />
                    </div>
                </div>
                <Newsletter />
                <Footer />
            </div>
        )
    }
}

export default ProductPage;