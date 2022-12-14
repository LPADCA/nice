import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../assets/components/layout'
import Faq from "../assets/components/faq"
//import HowItWorks from "../assets/components/howitworks"
import Testimonials from "../assets/components/testimonials"
import { Element } from 'react-scroll'

import "@styles/index.scss"

const Homepage = ({ data, location }) => {
    return (
        <Layout location={location}>
                <section>
                    <div className="container" style={{textAlign: 'center'}}>[ANIMATION]</div>
                </section>
                <Element name="products"/>
                <section>
                    <div className="container">
                        <div className="products">
                            <div className="top grid">
                                <div className="left">
                                    <h2>Quite Simply, It's the Best Recovery System on the Market.</h2>
                                    <p>* At least that's what the reviews say.</p>
                                </div>
                                <div className="right">
                                    <p>
                                        Delivers precise cold therapy without ice - along with programmable and customizable pneumatic compression - in the smallest, lightest and easiest-to-use unit.
                                    </p>
                                    <Link to="/contact" className="button with-arrow">Contact us</Link>
                                </div>
                            </div>
                            <div className="items grid">
                                <div className="item item1">
                                    <Link to="/nice1">
                                        <div className="shadow">
                                            <img src="/tmp-content/img2.jpg"/>
                                        </div>
                                        <h4>Nice1 System</h4>
                                        <p>Delivers precise cold therapy without ice - along with programmable and customizable pneumatic compression - in the smallest.</p>
                                    </Link>

                                </div>
                                <div className="item item2">
                                    <Link to="/wraps">
                                        <div className="shadow">
                                            <img src="/tmp-content/img1.jpg"/>
                                        </div>
                                        <h4>Therapy Wraps</h4>
                                        <p>Different therapy wraps</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Element name="testimonials"/>
                <Testimonials/>


                <Element name="contactus"/>
                <section className="contact">
                    <div className="container">
                        <div className="grid">
                            <div className="left">
                                <h2>If You Have Questions, We Have Answers.</h2>
                                <p>*Really. How Can We Help?</p>
                            </div>
                            <div className="right">
                                <p>Just fill out the simple form below and our Boulder, CO-based team will respond to you within 2 working days.</p>
                                <form>
                                    <input type="text" placeholder="First + last name"/>
                                    <input type="email" placeholder="Email"/>
                                    <textarea placeholder="Your question"></textarea>
                                    <a href="#" className="button with-arrow">Submit</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                {
                    //<Element name="howitworks"/>
                    //<HowItWorks/>
                }

                <section className="illustration">
                    <div className="grid container">
                        <div className="left">
                            <img className="top" src="/tmp-content/ill21.jpg"/>
                            <img className="bottom" src="/tmp-content/ill22.jpg"/>
                        </div>
                        <div className="right">
                            <h2>Pain Relief + Recovery. Post Surgery or Post Work Out. That’s NICE.</h2>
                            <p>*Used by top surgeons, trainers, pro athletes and United States Ski & Snowboard.</p>
                        </div>
                    </div>
                </section>


                <Faq/>

                <section className="instagram">
                    <div className="container">
                        <p className="top">our instagram <a target="_blank" href="https://instagram.com/nicerecovery">@nicerecovery</a></p>
                        <div className="feed">
                            <img src="/tmp-content/photo1.jpg"/>
                            <img src="/tmp-content/photo2.jpg"/>
                            <img src="/tmp-content/photo3.jpg"/>
                            <img src="/tmp-content/photo4.jpg"/>
                        </div>
                    </div>
                </section>
        </Layout>
    )
}



export default Homepage

export const homepageQuery = graphql`
    query Homepage {
        prismicHomepage {
            data {
                title {
                    html
                    raw
                    text
                }
            }
        }
    }
`