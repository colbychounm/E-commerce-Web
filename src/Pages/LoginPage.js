import React from "react";

import './LoginPage.scss';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="login-page-container">
                <div className="bg"></div>
                <div className="sign-in-container">
                    <div className="content">
                        <div className="sign-in-title">SIGN IN</div>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <form action="/">
                            <button>LOGIN</button>
                        </form>
                        <div className="text">DO NOT YOU REMEMBER THE PASSWORD?</div>
                        <div className="text">CREATE A NEW ACCOUNT</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;