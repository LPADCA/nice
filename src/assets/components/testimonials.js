import React, { Component, createRef } from 'react'
import { graphql, StaticQuery } from 'gatsby';
//import { TypeAnimation } from 'react-type-animation';
import TypeIt from "typeit-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, A11y } from 'swiper';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-circular-progressbar/dist/styles.css';

import "@styles/testimonials.scss"


const staticQuery = graphql`
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

class TestimonialsInner extends Component {
    constructor(props) {
        super(props);
        this.swipermain = createRef()
        this.typeStrings = props.data.prismicTestimonials.data.element.map(el => el.category);
        this.typeInstance = null;
        this.state = {
            speed: props.speed ? props.speed : 800,
            delay: props.delay ? props.delay : 4000,
            thumbsSwiper: null,
            current: 0,
            indices: Array(6).fill(0),
        }
        this.data = props.data
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

    slideChanged = () => {
        this.setState({indices: this.setArray(6, this.state.current)});
    }
    slideChangeStarted = () => {
        var newVal = this.swipermain.current.swiper.realIndex; 
        var len2del = this.typeStrings[this.state.current].length;
        this.setState({current: newVal}); 
        if (this.typeInstance !== null) {
            this.typeInstance.delete(len2del).type(this.typeStrings[this.state.current]).flush();
        }
    }

    render() {
        return (
            <section className="testimonials">
                <div className="grid container">
                    <div className="left"> 
                        <h2>What <TypeIt
                            options={{
                            loop: false,
                            speed: 50,
                            }}
                            getBeforeInit={(instance) => {
                                instance.type(this.typeStrings[this.state.current]);
                                return instance;
                              }}
                            getAfterInit={(instance) => {
                                this.typeInstance = instance;
                                return instance;
                              }}

                        /><br/>think about Nice</h2>
                                
                        <div className="countdown">
                            {this.data.prismicTestimonials.data.element.map((item, index) => (
                                <button key={index} className="profile" onClick={this.switchSlide.bind(this, (index + 1))}>
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
                                        <img className={this.state.indices[index] ? 'active' : ''} src={item.profile.url} width="75" height="75" alt="Profile"/>
                                    </CircularProgressbarWithChildren>
                                </button>
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
                                pauseOnMouseEnter: true,
                            }}
                            loop = {true}
                            onSlideChangeTransitionEnd={this.slideChanged}
                            onSlideChangeTransitionStart={this.slideChangeStarted}
                        
                        >
                            {this.data.prismicTestimonials.data.element.map((item, index) => 
                                <SwiperSlide key={index}>
                                    <div className="card">
                                        <div className="card_header">
                                            <div className="author">{item.name}</div>
                                            <div className="position">{item.position}</div>
                                        </div>
                                        <div className="text" dangerouslySetInnerHTML={{__html: item.content.html}} />
                                    </div>
                                </SwiperSlide>
                        )}
                        </Swiper>
                    </div>
                </div>
            </section>
    )
    }
}

/* export default Testimonials */

const Testimonials = () => (
    <StaticQuery
      query={staticQuery}
      render={(data) => (
        <TestimonialsInner data={data}/>
      )}
    />
)
export default Testimonials