import React, { Component, createRef } from 'react'
import { StaticQuery } from 'gatsby';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, A11y } from 'swiper';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-circular-progressbar/dist/styles.css';

import "@styles/testimonials.scss"

const testimonialsQuery = `
    query testimonialsQuery {
        prismicTestimonials {
        data {
            element {
            category
            content {
                html
                text
            }
            name
            position
            profile {
                url(imgixParams: {maxWidth: 150})
            }
            }
            title {
            text
            }
        }
        }
    }
`
class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.swipermain = createRef()
        this.state = {
            speed: props.speed ? props.speed : 500,
            delay: props.delay ? props.delay : 2000,
            thumbsSwiper: null,
            current: 0,
            indices: Array(6).fill(0),
            type: "patients"            
        }
    }

   
    setArray = (count, index) => {
        var arr = Array(count).fill(0)
        arr[index] = 100
        return arr
    }

    switchSlide = (value) => {
        if (this.swipermain.current !== null) 
            this.swipermain.current.swiper.slideTo(value)
    }

    slideChanged = () => {var ax = this.swipermain.current.swiper.realIndex; this.setState({current: ax, indices: this.setArray(6, ax)});}

    /*   <a href="" className="button white">patient</a> <a href="" className="button white lite">surgeon</a> <a href="" className="button white lite">phys therapist</a> */


    render() {
        return (
            <section className="testimonials">
                <div className="left">
                    <h2>What <TypeAnimation
                            sequence={['patients', 1400, 'surgeons', 1400, 'PTs', 1400, 'patients', 1400, 'PTs', 1400, 'patients']}
                            wrapper="span"
                            cursor={true}
                            speed={15} 
                            deletionSpeed={15}
                            repeat={Infinity}
                            style={{ textDecoration: 'underline', fontStyle: 'italic' }}
                            />
                            <br/>think about Nice</h2>
                    <div className="countdown">
                        {this.state.indices.map((value, index) => (
                            <div key={index} className="profile" onClick={this.switchSlide.bind(this, (index + 1))}>
                                <CircularProgressbarWithChildren 
                                    value={this.state.indices[index]} 
                                    strokeWidth={2}
                                    styles={buildStyles({
                                        pathColor: '#ffffff',
                                        trailColor: 'rgba(255,255,255,0.4)',
                                        pathTransition: 
                                            this.state.indices[index] === 0 ? "none" : "stroke-dashoffset 2s ease 0s",
                                        })}
                                    >
                                    <img src={`/tmp-content/avatar${index+1}.jpg`}/>
                                </CircularProgressbarWithChildren>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="nav">
                        <div className="arrow-left testimonials-prev"></div>
                        <div className="arrow-right testimonials-next"></div>
                    </div>
                    <Swiper ref={this.swipermain} className="swiper-main"
                        modules={[Navigation, Thumbs, Autoplay, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation = {{
                            nextEl: '.testimonials-next',
                            prevEl: '.testimonials-prev'
                        }}
                        speed={this.state.speed}
                        autoplay={{
                            delay: this.state.delay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        loop = {true}
                        onSlideChangeTransitionEnd={this.slideChanged}
                    >
                        <SwiperSlide className="card">
                            <div className="header">
                                <span className="author">Elaine Boyd, patient</span>
                                <span className="position">H.R. Director, Boston Scientific Corporation Ireland</span>
                            </div>
                            <div className="text">
                                [1] The NICE machine has been essential in my quick recovery from a major knee injury in skiing. Not having to refill the machine with ice is incredibly convenient, especially when you're recovering from surgery.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card">
                            <div className="header">
                                <span className="author">Elaine Boyd, patient</span>
                                <span className="position">H.R. Director, Boston Scientific Corporation Ireland</span>
                            </div>
                            <div className="text">
                                [2] The NICE machine has been essential in my quick recovery from a major knee injury in skiing. Not having to refill the machine with ice is incredibly convenient, especially when you're recovering from surgery.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card">
                            <div className="header">
                                <span className="author">Elaine Boyd, patient</span>
                                <span className="position">H.R. Director, Boston Scientific Corporation Ireland</span>
                            </div>
                            <div className="text">
                                [3] The NICE machine has been essential in my quick recovery from a major knee injury in skiing. Not having to refill the machine with ice is incredibly convenient, especially when you're recovering from surgery.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card">
                            <div className="header">
                                <span className="author">Elaine Boyd, patient</span>
                                <span className="position">H.R. Director, Boston Scientific Corporation Ireland</span>
                            </div>
                            <div className="text">
                                [4] The NICE machine has been essential in my quick recovery from a major knee injury in skiing. Not having to refill the machine with ice is incredibly convenient, especially when you're recovering from surgery.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card">
                            <div className="header">
                                <span className="author">Elaine Boyd, patient</span>
                                <span className="position">H.R. Director, Boston Scientific Corporation Ireland</span>
                            </div>
                            <div className="text">
                                [5] The NICE machine has been essential in my quick recovery from a major knee injury in skiing. Not having to refill the machine with ice is incredibly convenient, especially when you're recovering from surgery.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card">
                            <div className="header">
                                <span className="author">Elaine Boyd, patient</span>
                                <span className="position">H.R. Director, Boston Scientific Corporation Ireland</span>
                            </div>
                            <div className="text">
                                [6] The NICE machine has been essential in my quick recovery from a major knee injury in skiing. Not having to refill the machine with ice is incredibly convenient, especially when you're recovering from surgery.
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
    )
    }
}

export default Testimonials