import React from "react";
import NavBar from "../Components/NavBar";
import Promotion from "../Components/Promotion";
import Footer from "../Components/Footer";

import './Cart.scss';

class Cart extends React.Component {
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
        const amount = this.state.amount
        return (
            <div className="cart-page-container">
                <NavBar />
                <Promotion />
                <div className="cart-container">
                    <div className="cart-title">YOUR BAG</div>
                    <div className="actions">
                        <div className="left">
                            <form action="/product">
                                <button>CONTINUE SHOPPING</button>
                            </form>
                        </div>
                        <div className="center">
                            <div>Shopping Bag(2)</div>
                            <div>Your Wishlist(0)</div>
                        </div>
                        <div className="right">
                            <button>CHECKOUT NOW</button>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <div className="product-detail">
                                <img className="left" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="product-img" />
                                <div className="center">
                                    <div><b>Product:</b> ALPHA THUNDER SHOES</div>
                                    <div><b>ID:</b> 93210392012</div>
                                    <div className="color"></div>
                                    <div><b>Size:</b> 37.5</div>
                                </div>
                                <div className="right">
                                    <div className="amount">
                                        <button onClick={() => this.handleAmount("add")} className="btn-1">+</button>
                                        <button className="btn-2">{amount}</button>
                                        <button onClick={() => this.handleAmount("minus")} className="btn-1">-</button>
                                    </div>
                                    <div className="price">$ {30 * amount}</div>
                                </div>
                            </div>
                            {/* <div className="product-detail">
                                <img className="left" src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="product-img" />
                                <div className="center">
                                    <div><b>Product:</b> HAKURA T-SHIRT</div>
                                    <div><b>ID:</b> 13240322212</div>
                                    <div className="color"></div>
                                    <div><b>Size:</b> M</div>
                                </div>
                                <div className="right">
                                    <div className="amount">
                                        <button onClick={() => this.handleAmount("add")} className="btn-1">+</button>
                                        <button className="btn-2">{amount}</button>
                                        <button onClick={() => this.handleAmount("minus")} className="btn-1">-</button>
                                    </div>
                                    <div className="price">$ {25 * amount}</div>
                                </div>
                            </div> */}
                        </div>
                        <div className="cart-right">
                            <div className="total-title">ORDER SUMMARY</div>
                            <div className="text"><div>Subtotal</div><div>$ {30 * amount}</div></div>
                            <div className="text"><div>Estimated Shipping</div><div>$ 5.90</div></div>
                            <div className="text"><div>Shipping Discount</div><div>$ -5.90</div></div>
                            <div className="text"><div>Total</div><div>$ {30 * amount}</div></div>
                            <button>CHECKOUT NOW</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart;