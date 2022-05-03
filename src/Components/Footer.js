import React from "react";

import './Footer.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="left">
                    <div className="title">Useful Links</div>
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="/">Man Fashion</a>
                        <a href="/">Woman Fashion</a>
                        <a href="/">Accessories</a>
                        <a href="/">Wishlist</a>
                        <a href="/">Cart</a>
                        <a href="/">Order Tracking</a>
                        <a href="/">My Account</a>
                        <a href="/">Terms</a>
                    </div>
                </div>
                <div className="center">
                    <button className="facebook"><FacebookIcon /></button>
                    <button className="instagram"><InstagramIcon /></button>
                    <button className="twitter"><TwitterIcon /></button>
                    <button className="pinterest"><PinterestIcon /></button>
                </div>
                <div className="right">
                    <div className="title">Contact</div>
                    <div className="content">
                        <LocationOnIcon />
                        <div>Ho Chi Minh City, Vietnam</div>
                    </div>
                    <div className="content">
                        <LocalPhoneIcon />
                        <div>+1234 56 789</div>
                    </div>
                    <div className="content">
                        <EmailIcon />
                        <div>contact@colby.dev</div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;