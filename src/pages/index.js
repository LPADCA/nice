import React from "react"
import { graphql } from "gatsby"
import Layout from '../assets/components/layout'
import Faq from "../assets/components/faq"
import Testimonials from "../assets/components/testimonials"
import "@styles/index.scss"

const Homepage = ({ data, location }) => {
    return (
        <Layout>
                <section>
                    <div className="container" style={{textAlign: 'center'}}>[ANIMATION]</div>
                </section>
                <section>
                    <div className="container">
                        <div className="products">
                            <div className="top">
                                <h2><span className="nowrap">Your health.</span><br/>
                                    <span className="nowrap">Your style.</span> <span className="nowrap">Your way.</span></h2>
                                <p>
                                    Delivers precise cold therapy without ice - along with programmable and customizable pneumatic compression - in the smallest, lightest and easiest-to-use unit.
                                    <br/><a className="button with-arrow">Contact us</a>
                                </p>
                            </div>
                            <div className="items">
                                <div className="item item1">
                                    <a href="">
                                        <div className="shadow">
                                            <img src="/tmp-content/img1.jpg"/>
                                        </div>
                                        <h4>Nice1 Gun</h4>
                                        <p>Delivers precise cold therapy without ice - along with programmable and customizable pneumatic compression - in the smallest.</p>
                                        <p className="price">$899</p>
                                    </a>
                                </div>
                                <div className="item item2">
                                    <a href="">
                                        <div className="shadow">
                                            <img src="/tmp-content/img2.jpg"/>
                                        </div>
                                        <h4>Therapy Wraps</h4>
                                    </a>
                                </div>
                                <div className="item item3">
                                    <a href="">
                                        <div className="shadow">
                                            <img src="/tmp-content/img3.jpg"/>
                                        </div>
                                        <h4>Nice 1</h4>
                                    </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="how-it-works">
                            <h2>How it works</h2>
                            <div className="cards">
                                <div className="card">
                                    <div className="content">
                                        <h3>Step #1</h3>
                                        <p>Delivers precise cold therapy without ice – along with programmable and customizable pneumatic compression – in the smallest.</p>
                                    </div>
                                    <div className="image">
                                        <img src="/tmp-content/how-it-works-frame-1.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="dots">
                                <div className="dot"><span>01</span><span className="line"></span></div>
                                <div className="dot"><span>02</span><span className="line"></span></div>
                                <div className="dot"><span>03</span><span className="line"></span></div>
                                <div className="dot"><span>04</span><span className="line"></span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="illustration1">
                    <div className="grid container">
                        <div className="left">
                            <div className="top">
                                <div className="ltw">
                                    <img src="/tmp-content/ill11.jpg"/>
                                </div>
                                <p>
                                    That’s why it has been quickly adopted by top orthopedic surgeons, pro athletes, pro teams and U.S. Ski and Snowboard as a groundbreaking tool in helping people recover faster post-surgery, post-injury and post-workout.
                                </p>
                            </div>
                            <div className="bottom">
                                <div className="lbw">
                                    <img src="/tmp-content/ill13.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rw">
                                <img src="/tmp-content/ill12.jpg"/>
                            </div>
                        </div>
                    </div>
                </section>

                <Faq/>
                <Testimonials/>

                <section className="illustration2">
                    <div className="grid container">
                        <div className="left">
                            <img src="/tmp-content/ill21.jpg"/>
                        </div>
                        <div className="right">
                            <img src="/tmp-content/ill22.jpg"/>
                        </div>
                    </div>
                </section>
                <section className="instagram">
                    <div className="container">
                        <p className="top">our instagram <a href="#">@nicerecovery</a></p>
                        <div className="feed">
                            <img src="/tmp-content/photo1.jpg"/>
                            <img src="/tmp-content/photo2.jpg"/>
                            <img src="/tmp-content/photo3.jpg"/>
                            <img src="/tmp-content/photo4.jpg"/>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="container">
                        <div className="grid">
                            <div className="left">
                                Questions about our product?
                            </div>
                            <div className="right">
                                <h3>Our team of experts is ready to answer your questions, give you more info and help you.</h3>
                                <p>Fill in the form below and you will receive an answer within 2 working days.</p>
                                <form>
                                    <input type="text" placeholder="First + last name"/>
                                    <input type="email" placeholder="Email"/>
                                    <textarea placeholder="Your question"></textarea>
                                    <a href="" className="button with-arrow">Send message</a>
                                </form>
                            </div>
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