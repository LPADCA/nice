import React from 'react'
import {FiInstagram, FiFacebook} from 'react-icons/fi'
import {RiVimeoLine} from 'react-icons/ri' 
import "@styles/footer.scss"
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="top">
                <Link to="/">
                    <img className="logo" src="/images/nice-logo-white.svg" alt="Nice logo"/>
                </Link>
                <div className="logos">
                    <a target="_blank" href="https://www.instagram.com/nicerecovery/"><div className="icon"><FiInstagram size="1.2em"/></div></a>
                    <a target="_blank" href="https://www.facebook.com/NiceRecovery/"><div className="icon"><FiFacebook size="1.2em"/></div></a>
                    <a target="_blank" href="https://vimeo.com/user85858763"><div className="icon"><RiVimeoLine size="1.2em"/></div></a>
                </div>
                <div className="menu">
                    <div className="left">
                        <ul>
                            <li><Link to="/nice1">Nice1</Link></li>
                            <li><Link to="/howto">HowTo's</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li>
                                <form>
                                    <div className="form">
                                        <div className="l">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                        <div className="r">
                                            <a href="#" className="button white with-arrow just-arrow"></a>
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
                    <Link to="/privacy-policy">Privacy policy</Link>
                </div>
                <div className="right">
                    <Link to="/terms-of-use">Terms of Use</Link>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
