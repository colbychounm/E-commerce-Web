import React from "react";
import { popularProducts } from "./data";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import './Product.scss';

class Product extends React.Component {
    render() {
        return (
            <div className="product-container">
                <div className="product-wrapper">
                    {
                        popularProducts.map((item) => {
                            return <div className="product">
                                <div className="circle"></div>
                                <img src={item.img} alt="productimage" />
                                <div className="product-button">
                                    <button><ShoppingCartOutlinedIcon /></button>
                                    <button><SearchOutlinedIcon /></button>
                                    <button><FavoriteBorderOutlinedIcon /></button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Product;