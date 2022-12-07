import React from 'react'
import {FiInstagram, FiFacebook} from 'react-icons/fi'
import {RiVimeoLine} from 'react-icons/ri' 
import "@styles/footer.scss"

const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="top">
                <img className="logo" src="/images/nice-logo-white.svg" alt="Nice logo"/>
                <div className="logos">
                    <a target="_blank" href="https://www.instagram.com/nicerecovery/"><div className="icon"><FiInstagram size="1.2em"/></div></a>
                    <a target="_blank" href="https://www.facebook.com/NiceRecovery/"><div className="icon"><FiFacebook size="1.2em"/></div></a>
                    <a target="_blank" href="https://vimeo.com/user85858763"><div className="icon"><RiVimeoLine size="1.2em"/></div></a>
                </div>
                <div className="menu">
                    <div className="left">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Instructions</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li>
                                <form>
                                    <div className="form">
                                        <div className="l">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                        <div className="r">
                                            <a href="#" className="button white with-arrow">Subscribe</a>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line"/>
            <div className="bottom">
                <div className="left">
                    All rights reserved. MADE IN USA / BOULDER, CO 
                </div>
                <div className="center">
                    <a href="/privacy-policy">Privacy policy</a>
                </div>
                <div className="right">
                    <a href="/terms-of-use">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
