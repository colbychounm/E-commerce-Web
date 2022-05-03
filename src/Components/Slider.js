import React from "react";
import { sliderItems } from './data';

import './Slider.scss';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        }
    }

    handleSlider = (direction) => {
        const slideIndex = this.state.slideIndex;
        if (direction === 'left') {
            this.setState({
                slideIndex: slideIndex > 0 ? (slideIndex - 1) : 0
            })
        } else {
            this.setState({
                slideIndex: slideIndex < 2 ? (slideIndex + 1) : 0
            })
        }
    };

    render() {
        return (
            <div className="slider-container">
                <div className="slider-arrow">
                    <div onClick={() => this.handleSlider("left")} className="arrow arrow-left"><ArrowLeftIcon /></div>
                    <div onClick={() => this.handleSlider("right")} className="arrow arrow-right"><ArrowRightIcon /></div>
                </div>
                <div style={{ transform: `translateX(calc(${this.state.slideIndex} * (-100vw)))` }} className="slide-wrapper">
                    {
                        sliderItems.map((item) => {
                            return <div key={item.id} style={{ backgroundColor: `#${item.bg}` }} className="slide">
                                <div className="img-container">
                                    <img src={item.img} alt="sliderpicture" />
                                </div>
                                <div className="text-container">
                                    <div className="text-title">{item.title}</div>
                                    <div className="text-desc">{item.desc}</div>
                                    <form action="/product-detail">
                                        <button>SHOP NOW</button>
                                    </form>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div >
        )
    }
}

export default Slider;