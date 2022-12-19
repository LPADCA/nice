import React, { Component, setState, createRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper';
import 'swiper/css';

import "@styles/howitworks.scss"

class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.progressbar = createRef()
        this.state = {
            is_playing: true
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.pause !== this.props.pause) && this.props.pause === false) {
            this.setState({is_playing: false})
            setTimeout(() => {
                this.setState({is_playing: true})
                }, 10);
            }
        }

    render() {
        return (
            <div className="progressbar-wrapper">
                <div ref={this.progressbar} className={`progressbar-insert ${this.props.play && this.state.is_playing ? 'animate' : ''}  ${this.props.pause ? 'pause' : ''}`}/>
            </div>
        )
    }
}




class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.num_slides = 6
        this.state = {
            speed: props.speed ? props.speed : 500,
            delay: props.delay ? props.delay : 2000,
            indices: [1, 2, 3, 4, 5, 6],
            play: Array(this.num_slides).fill(false),
            pause: false
        }
    }

    componentDidMount() {
        this.setState({play: this.calcSlides(0)})
    }

    calcSlides = (index) => {
        var output = Array(this.num_slides).fill(false)
        output[index] = true
        return output
    }

    slideChanged = (props) => {
        this.setState({play: this.calcSlides(props.realIndex)})
    }

    autoplayPause = () => {
        this.setState({pause: true})
    }

    autoplayResume = () => {
        this.setState({pause: false})
    }


    render() {
        return (
            <section className="how-it-works">
                <div className="container">
                    <div className="wrapper">
                        <h2>How it works</h2>
                        <Swiper className="cards"
                            modules={[Autoplay, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            speed={this.state.speed}
                            autoplay={{
                                delay: this.state.delay,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            loop = {false}
                            onSlideChangeTransitionEnd={this.slideChanged}
                            onAutoplayPause={this.autoplayPause}
                            onAutoplayResume={this.autoplayResume}

                        >
                            {this.state.indices.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="card">
                                    <div className="content">
                                        <h3>Step #{index+1}</h3>
                                        <p>Delivers precise cold therapy without ice – along with programmable and customizable pneumatic compression – in the smallest.</p>
                                    </div>
                                    <div className="image">
                                        <img src="/tmp-content/how-it-works-frame-1.png"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="dots">
                            {this.state.indices.map((value, index) => (
                                <div key={index} className="dot"><span>0{index+1}</span><ProgressBar play={this.state.play[index]} pause={this.state.pause}/></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HowItWorks