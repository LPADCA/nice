import React, {useState , useRef, useEffect, useLayoutEffect} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../assets/components/layout'
import Faq from "../assets/components/faq"
//import HowItWorks from "../assets/components/howitworks"
import Testimonials from "../assets/components/testimonials"
import { gsap } from "gsap"
//import { Tween } from 'react-gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {debounce} from "lodash" 
import "@styles/animation.scss"
import "@styles/index.scss"
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ 
    ignoreMobileResize: true
});
//ScrollTrigger.normalizeScroll(true);



const Title = ({children, className, timeline}) => {
    const el = useRef();
    useLayoutEffect(() => {
        timeline && timeline.to(
            el.current, 
            {
                opacity: 0,
                duration: 1,
                y: -150,
                scrollTrigger: {
                    start: "top top",
                    end: "+=350 top",
                    trigger: "#animation",
                    scrub: true,
                    toggleActions: "play none none reverse",
                }
            }
        );
      }, [timeline]);    

    return (
        <div className={className} ref={el}>{children}</div>
    )
}

const Block = ({children, timeline, cls, start, end}) => {
    const el = useRef();
    useLayoutEffect(() => {
        timeline && timeline.to(
            el.current, 
            {
                keyframes: [
                    {opacity: 1, duration: 1},
                    {opacity: 1, duration: 3},
                    {opacity: 0, duration: 1},
                ],
                scrollTrigger: {
                    start: start,
                    end: end,
                    trigger: "#trigger",
                    scrub: true,
                    toggleActions: "play none none reverse",
                }
            }
        );
      }, [timeline, start, end]);    

    return (
        <div ref={el} className={`block ${cls}`}>
            {children}
        </div>
    )
}

const Animation = ({title, blocks}) => {
    const [tl, setTl] = useState();
    const [tl2, setTl2] = useState();
    const [tl3, setTl3] = useState();
    const [loading, setLoading] = useState(true);
    const wrapperRef = useRef();
    const videoRef = useRef();
    const [ratio, setRatio] = useState('s');
    const [invert, setInvert] = useState(false);
    const time_triggers = [
        [1500, 1800],
        [2500, 2800],
        [3500, 3800],
        [4500, 4800],
    ]

    function updateSize() {
        const h = window.innerHeight;
        const w = window.innerWidth;
        if (w>=1.3*h) setRatio('h')
        else if (w<1.3*h && w>h*0.67) setRatio('s')
        else setRatio('v2')
    }

    useEffect(() => {
        videoRef.current.currentTime = 0
        const tl = gsap.timeline({
            scrollTrigger: {
                start: "top top+=2",
                end: "+=6000",
                trigger: wrapperRef.current,
                scrub: 0.5,
                //pin: true,
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
                onUpdate: debounce(function(self) {
                    const frameCount = 25; 
                    const step = 1/25;
                    if(videoRef.current) {
                        let scrollPos = self.progress;
                        if (scrollPos > 0.49 && scrollPos < 1) {
                            setInvert(true);
                            document.getElementById('header').classList.add('white');
                        }
                        else if (scrollPos <=0.49) {
                            setInvert(false);
                            document.getElementById('header').classList.remove('white');
                        }
                        let videoDuration = videoRef.current.duration;
                        let currentTime = videoRef.current.currentTime;
                        let newTime = videoDuration * scrollPos;
                        let target = Math.floor(newTime*frameCount)*step
                        if(newTime && currentTime !== target) {
                            videoRef.current.currentTime = target;
                        }
                    }
                }, 10),
            } 
        });
        tl.to(
            wrapperRef.current,
            {
                opacity: 0,
                scrollTrigger: {
                    start: "top top",
                    end: "+=500",
                    scrub: true,
                    trigger: "#cover-trigger",
                    toggleActions: "play none none reverse",
                }
            }
        )
        setTl(tl);
        const tl2 = gsap.timeline({});
        setTl2(tl2);
        const tl3 = gsap.timeline({});
        setTl3(tl3);
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
        }, [wrapperRef, videoRef]);

    useLayoutEffect(() => {
    }, []);

    return (
        <section id="animation" className="animation">
            <div>
                {/*<Preload loading={loading}/>*/}
                <Title timeline={tl2} className="welcome centered">
                    <div dangerouslySetInnerHTML={{__html: title.html}} />
                    <p>
                        <a href="/nice1" className="discover">discover</a>
                    </p>
                </Title>
                <div id="trigger"/>
                <ScrollArrow timeline={tl3}/>
                <div id="video-wrapper" className="video-wrapper" ref={wrapperRef}>
                    <video 
                        ref={videoRef} 
                        className="video" 
                        src={`/images/animation/${ratio}.mp4`} 
                        playsInline={true} 
                        webkit-playsinline="true" 
                        preload="auto" 
                        muted="muted"
                        onCanPlayThrough={() => setLoading(false)}
                        />
                </div>
                {blocks.map((block, i) => (
                    <Block key={i} timeline={tl2} cls={`b1 ${invert ? 'white' : ''}`} start={`${time_triggers[i][0]} bottom`} end={`${time_triggers[i][1]} top`}>
                        <h3>{block.header}</h3>
                        <p>{block.text}</p>
                    </Block>
                ))}

                {blocks.map((block, i) => (
                    <Block key={i} timeline={tl2} cls={`c c${i+1} ${invert ? 'white' : ''}`} start="6000 bottom" end="7000 top">
                        <img src={block.icon.url} alt={block.icon.alt} width="60"/>
                        <h3>{block.header}</h3>
                        <p>{block.text}</p>
                    </Block>
                ))}
            </div>
        </section>
    )
}

const ScrollArrow = ({timeline}) => {
    const el = useRef();
    useLayoutEffect(() => {
        timeline && timeline.to(
            el.current, 
            {
                opacity: 0,
                scrollTrigger: {
                    start: "top top",
                    end: "+=500",
                    scrub: true,
                    trigger: "#cover-trigger",
                    onEnter: function() {
                        document.getElementById('header').classList.remove('white');
                    },
                    onLeaveBack: function() {
                        document.getElementById('header').classList.add('white');
                    }
                }   
            }
        );
      }, [timeline]);   
    return (
        <div ref={el} className="scroll-down-arrow"/>
    )
}


const AnimateBorder = ({image}) => {
    const [tl, setTl] = useState();
    const imageRef = useRef()
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            imageRef.current,
            {
                borderRadius: 20+"px",
            },
            {
                keyframes: [
                    {borderRadius: 250+"px", duration: 1},
                    {borderRadius: 20+"px", duration: 1}
                ],
                scrollTrigger: {
                    start: "top bottom",
                    end: "bottom top",
                    trigger: imageRef.current,
                    scrub: true,
                    toggleActions: "play none none reverse",
                }
            }
        )
        setTl(tl);
        return () => {};
    }, [imageRef]);

    return (
        <div className="shadow">
            <img ref={imageRef} src={image.url} alt={image.alt}/>
        </div>
    )

}

const Preload = ({loading}) => {
    return (
        <div className={`preload`}>
            <img src="/images/loading.gif" width="100" height="100" alt="Loading"/>
        </div>
    )
}


const Homepage = ({ data, location }) => {
    const d = data.prismicHomepage.data
    return (
        <Layout location={location} {...Layout.pickSeoProps(d)}>
                <Animation title={d.title} blocks={d.blocks}/>
                <div id="cover-trigger" className="content-wrapper">
                <section>
                    <div className="container">
                        <div className="products">
                            <div className="top grid">
                                <div className="left">
                                    <h2>{d.products_title.text}</h2>
                                    <p>{d.products_subtitle}</p>
                                </div>
                                <div className="right">
                                    <p>{d.products_cta_text}</p>
                                    <Link to="/contact" className="button with-arrow">Contact us</Link>
                                </div>
                            </div>
                            <div className="items grid">
                                {d.products.map((item, i)=>(
                                    <div key={i} className={`item item${i+1}`}>
                                        <Link to={item.product.url}>
                                            <AnimateBorder image={item.image}/>
                                            <h4>{item.header.text}</h4>
                                            <div dangerouslySetInnerHTML={{__html: item.description.html}}/>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonials/>
                <section className="contact">
                    <div className="container">
                        <div className="grid">
                            <div className="left">
                                <h2>{d.contact_title.text}</h2>
                                <p>{d.contact_subtitle}</p>
                            </div>
                            <div className="right">
                                <p>{d.contact_form_cta}</p>
                                <form>
                                    <input type="text" placeholder="First + last name"/>
                                    <input type="email" placeholder="Email"/>
                                    <textarea placeholder="Your question"></textarea>
                                    <button className="button with-arrow">Submit</button>
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
                            <img className="top" src={d.ill_images[0].image.url} alt={d.ill_images[0].image.alt}/>
                            <img className="bottom" src={d.ill_images[1].image.url} alt={d.ill_images[1].image.alt}/>
                        </div>
                        <div className="right">
                            <h2>{d.ill_title.text}</h2>
                            <p>{d.ill_subtitle}</p>
                        </div>
                    </div>
                </section>


                <Faq/>

                <section className="instagram">
                    <div className="container">
                        <p className="top">our instagram <a target="_blank" rel="noreferrer" href="https://instagram.com/nicerecovery">@nicerecovery</a></p>
                        <div className="feed">
                            <img src="/tmp-content/photo1.jpg" alt=""/>
                            <img src="/tmp-content/photo2.jpg" alt=""/>
                            <img src="/tmp-content/photo3.jpg" alt=""/>
                            <img src="/tmp-content/photo4.jpg" alt=""/>
                        </div>
                    </div>
                </section>
                </div>
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
                blocks {
                    header
                    text
                    icon {
                        url
                        alt
                    }
                }
                seo_title
                seo_description
                seo_keywords
                products {
                    description {
                        html
                    }
                    header {
                        text
                    }
                    image {
                        alt
                        url
                    }
                    product {
                        url
                    }
                }
                products_subtitle
                products_cta_text
                products_title {
                    text
                }
                contact_form_cta
                contact_subtitle
                contact_title {
                    text
                }
                ill_images {
                    image {
                        alt
                        url
                    }
                }
                ill_subtitle
                ill_title {
                    text
                }
            }
        }
    }
`