import React, { Component, useState } from "react"
import { Slant as Hamburger } from 'hamburger-react'
//import * as Scroll from 'react-scroll';
//import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link } from 'react-scroll'

import "@styles/header.scss"

const MobileMenu = ({isOpen, forceClose}) => {
    return (
        <div className="mobile-menu-wrapper">
            <div className={`mobile-menu ${isOpen ? 'visible' : ''}`}>
                <div className="mobile-logo-wrapper">
                    <a href="/"><img className="logo" src="/images/nice-logo-extended-dark.svg" alt="Nice logo"/></a>
                </div>
                <div className="local-menu-wrapper-mobile">
                    <ul>
                        <li>
                            <Link className="dark" activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500} onClick={forceClose}>
                                All products   
                            </Link>
                        </li>
                        <li>
                            <Link className="dark" activeClass="active" to="howitworks" spy={true} smooth={true} offset={50} duration={500} onClick={forceClose}>
                                How it works   
                            </Link>
                        </li>
                        <li>
                            <Link className="dark" activeClass="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500} onClick={forceClose}>
                                Testimonials 
                            </Link>
                        </li>
                        <li>
                            <Link className="dark" activeClass="active" to="contactus" spy={true} smooth={true} offset={50} duration={500} onClick={forceClose}>
                                Contact us 
                            </Link>
                        </li>
                   </ul>
                </div>
                <div className="submenu-mobile">
                    <ul>
                        <li><a href="/privacy-policy" className="dark">privacy policy</a></li>
                        <li><a href="/terms-of-use" className="dark">terms of use</a></li>
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
                        <a href="/"><img className="logo" src="/images/nice-logo-extended-dark.svg" alt="Nice logo"/></a>
                    </div>
                    {this.location && this.location.pathname === '/' ? 
                        <div className="local-menu-wrapper">
                            <ul>
                                <li>
                                    <Link className="dark" activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500}>
                                        All products   
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dark" activeClass="active" to="howitworks" spy={true} smooth={true} offset={50} duration={500}>
                                        How it works   
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dark" activeClass="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>
                                        Testimonials 
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dark" activeClass="active" to="contactus" spy={true} smooth={true} offset={50} duration={500}>
                                        Contact us 
                                    </Link>
                                </li>
                        </ul>
                        </div>
                    : 
                        <div/>
                    }
                    {this.location && this.location.pathname === '/' ?                     
                        <div className="hamburger-wrapper">
                            <Hamburger distance="sm" toggled={this.state.isOpen} toggle={this.setOpen}/>
                            <MobileMenu isOpen={this.state.isOpen} forceClose={this.forceClose}/>
                        </div>
                    : 
                        <div/>
                    }
                </div>
            </div>
        </div>
    )
    }
}

export default Header
