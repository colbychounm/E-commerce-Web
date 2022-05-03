import React from "react";

import './Newsletter.scss';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

class Newsletter extends React.Component {
    render() {
        return (
            <div className="newsletter-container">
                <div className="title">Newsletter</div>
                <div className="desc">Get timely updates from your favorite products.</div>
                <div className="newsletter-input">
                    <input type="text" placeholder="Your email" />
                    <button><SendOutlinedIcon /></button>
                </div>
            </div>
        )
    }
}

export default Newsletter;