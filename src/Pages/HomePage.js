import React from "react";
import NavBar from "../Components/NavBar";
import Promotion from "../Components/Promotion";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Product from "../Components/Product";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page-container">
                <Promotion />
                <NavBar />
                <Slider />
                <Categories />
                <Product />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}

export default HomePage;