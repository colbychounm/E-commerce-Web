import React from "react";
import NavBar from "../Components/NavBar";
import Promotion from "../Components/Promotion";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

import "./DetailProductPage.scss";

class DetailProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1
        }
    }

    handleAmount = (action) => {
        const amount = this.state.amount;
        if (action === "minus") {
            this.setState({
                amount: amount > 1 ? amount - 1 : amount
            })
        }
        if (action === "add") {
            this.setState({
                amount: amount >= 1 ? amount + 1 : amount
            })
        }
    }

    render() {
        return (
            <div className="detail-product-page-container">
                <NavBar />
                <Promotion />
                <div className="detail-product">
                    <div className="left">
                        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="detailproduct" />
                    </div>
                    <div className="right">
                        <div className="product-title">Demin Jumpsuit</div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.
                        </div>
                        <div className="price">$ {20 * this.state.amount}</div>
                        <div className="detail">
                            <div className="detail-left">
                                <div className="text">Color</div>
                                <div className="color">
                                    <button className="btn-1"></button>
                                    <button className="btn-2"></button>
                                    <button className="btn-3"></button>
                                </div>
                            </div>
                            <div className="detail-right">
                                <div className="text">Size</div>
                                <select className="options">
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                            </div>
                        </div>
                        <div className="amount-add">
                            <div className="amount">
                                <button onClick={() => this.handleAmount("minus")} className="btn-1">-</button>
                                <button className="btn-2">{this.state.amount}</button>
                                <button onClick={() => this.handleAmount("add")} className="btn-3">+</button>
                            </div>
                            <button className="add">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <Newsletter />
                <Footer />
            </div>
        )
    }
}

export default DetailProductPage;