import React, { Component, useState } from "react"
import { Slant as Hamburger } from 'hamburger-react'
//import { Link as ScrollLink } from 'react-scroll'
import { Link } from "gatsby"

import "@styles/header.scss"

const MobileMenu = ({isOpen, forceClose}) => {
    return (
        <div className="mobile-menu-wrapper">
            <div className={`mobile-menu ${isOpen ? 'visible' : ''}`}>
                <div className="mobile-logo-wrapper">
                    <Link to="/"><img className="logo" src="/images/nice-logo-extended-dark.svg" alt="Nice logo"/></Link>
                </div>
                <div className="local-menu-wrapper-mobile">
                    <ul>
                        <li>
                            <Link className="dark" to="/" onClick={forceClose}>
                                Home  
                            </Link>
                        </li>
                        <li>
                            <Link className="dark" to="/nice1" onClick={forceClose}>
                                Nice1   
                            </Link>
                        </li>
                        <li>
                            <Link className="dark" to="/howto" onClick={forceClose}>
                                HowTo's 
                            </Link>
                        </li>
                        <li>
                            <Link className="dark" to="contact" onClick={forceClose}>
                                Contact us 
                            </Link>
                        </li>
                   </ul>
                </div>
                <div className="submenu-mobile">
                    <ul>
                        <li><Link to="/privacy-policy" className="dark">privacy policy</Link></li>
                        <li><Link to="/terms-of-use" className="dark">terms of use</Link></li>
                   </ul>
                </div>                       
            </div>
        </div>
    )
}

class Header extends Component {
    constructor(props){
        super(props);
        this.location = props.location
        this.state = {
            isOpen: false
        }
        this.setOpen = this.setOpen.bind(this)
        this.forceClose = this.forceClose.bind(this)
    }

    setOpen(isOpenValue) {
        this.setState({isOpen: isOpenValue})
    }

    forceClose() {
        this.setState({isOpen: false})
    }

    render() {
        return (
        <div className="header">
            <div className="container">
                <div className="grid">
                    <div className="logo-wrapper">
                        <Link to="/"><img className="logo" src="/images/nice-logo-extended-dark.svg" alt="Nice logo"/></Link>
                    </div>
                        <div className="local-menu-wrapper">
                            <ul>
                                <li>
                                    <Link className="dark" to="/">
                                        Home   
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dark" to="/nice1">
                                        Nice1   
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dark" to="/howto">
                                        How To's 
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dark" to="/contact">
                                        Contact us 
                                    </Link>
                                </li>
                        </ul>
                        </div>                
                        <div className="hamburger-wrapper">
                            <Hamburger distance="sm" toggled={this.state.isOpen} toggle={this.setOpen}/>
                            <MobileMenu isOpen={this.state.isOpen} forceClose={this.forceClose}/>
                        </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Header
