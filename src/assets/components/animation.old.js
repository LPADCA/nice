import React, {useState , useRef, useEffect, useLayoutEffect, useCallback} from "react"
import { gsap } from "gsap";
//import { Tween } from 'react-gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@styles/animation.scss"
gsap.registerPlugin(ScrollTrigger);

const Title = ({children, timeline}) => {
    const el = useRef();

    useLayoutEffect(() => {
        timeline && timeline.to(
            el.current, 
            {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    start: "top 20%",
                    end: "top top",
                    trigger: el.current,
                    scrub: true,
                    toggleActions: "play none none reverse",
                }
            }
        );
      }, [timeline]);    

    return (
        <div ref={el}>{children}</div>
    )

}


const Background1 = ({children, timeline}) => {
    const el = useRef();

    useLayoutEffect(() => {
        timeline && timeline.to(
            el.current, 
            {
                x: 500,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                trigger: "#box",
                scrub: true,
                markers: false,
                }
            }
        );
      }, [timeline]);    

    return (
        <div className="bg1" ref={el}>{children}</div>
    )
}

const Box = ({ timeline }) => {
    const el = useRef();
    const [current, setCurrent] = useState();

    const indices = [
        '/images/animation/01.png',
        '/images/animation/02.png',
        '/images/animation/03.png',
        '/images/animation/04.png',
        '/images/animation/05.png',
        '/images/animation/06.png',
        '/images/animation/07.png',
        '/images/animation/08.png',
        '/images/animation/09.png',
        '/images/animation/10.png',
        '/images/animation/11.png',
        '/images/animation/12.png',
        '/images/animation/13.png',
        '/images/animation/14.png',
        '/images/animation/01.png'
    ]

    // add 'left 100px' animation to timeline
    useLayoutEffect(() => {    
        setCurrent(0);
        for(let i=1; i<=5; i++) {
            timeline && timeline.to(
                el.current,{
                    y: - (el.current.offsetHeight * 0.1*i + window.outerHeight * 0.02*i),
                    onStart: () => {setCurrent(i)}, 
                    onReverseComplete: () => {setCurrent(i-1)}, 
                    duration: 1
                })
            }
        for(let i=6; i<=13; i++) {
            timeline && timeline.to(
                el.current,{
                    y: - (el.current.offsetHeight * 0.5 + window.outerHeight * 0.1),
                    onStart: () => {setCurrent(i)}, 
                    onReverseComplete: () => {setCurrent(i-1)}, 
                    duration: 1
                })    
            }
        timeline && timeline.to(
            el.current,{
                y: - (el.current.offsetHeight * 0.5 + window.outerHeight * 0.1),
                onStart: () => {
                    setCurrent(14);
                    document.getElementById('header').classList.add('inverted');
                    document.getElementById('bg2').classList.add('animated');
                    var el = document.getElementById('stripes').childNodes;
                    el.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible')
                        }, index*400)
                    })
                },
                onReverseComplete: () => {
                    setCurrent(13);
                    document.getElementById('header').classList.remove('inverted');
                    document.getElementById('bg2').classList.remove('animated');
                    var el = document.getElementById('stripes').childNodes;
                    el.forEach((child, index) => {
                        child.classList.remove('visible')
                    })
                }, 
                duration: 4
            })    
            timeline && timeline.to(
                el.current,{
                    y: - (el.current.offsetHeight * 0.4 + window.outerHeight * 0.1),
                    scale: 1.1,
                    onStart: () => {
                        setCurrent(14); 
                    },
                    onReverseComplete: () => {
                        setCurrent(14);
                    }, 
                    duration: 1
                })    
                timeline && timeline.to(
                    el.current,{
                        y: - (el.current.offsetHeight * 0.3 + window.outerHeight * 0.1),
                        scale: 1.2,
                        onStart: () => {
                            setCurrent(14); 
                        },
                        onReverseComplete: () => {
                            setCurrent(14);
                        }, 
                        duration: 1
                    })    
                    timeline && timeline.to(
                        el.current,{
                            y: - (el.current.offsetHeight * 0.3 + window.outerHeight * 0.1),
                            scale: 1.2,
                            onStart: () => {
                                setCurrent(14); 
                            },
                            onReverseComplete: () => {
                                setCurrent(14);
                            }, 
                            duration: 1
                        })    
                    timeline && timeline.to(
                        el.current,{
                            y: - (el.current.offsetHeight * 0.2 + window.outerHeight * 0.1),
                            scale: 1.3,
                            onStart: () => {
                                setCurrent(14); 
                            },
                            onReverseComplete: () => {
                                setCurrent(14);
                            }, 
                            duration: 1
                        })    
                    timeline && timeline.to(
                        el.current,{
                            y: - (el.current.offsetHeight * 0.1 + window.outerHeight * 0.1),
                            scale: 1.4,
                            onStart: () => {
                                setCurrent(14); 
                            },
                            onReverseComplete: () => {
                                setCurrent(14);
                            }, 
                            duration: 1
                        })    
                    timeline && timeline.to(
                        el.current,{
                            y: - window.outerHeight * 0.1,
                            scale: 1.5,
                            onStart: () => {
                                setCurrent(14); 
                            },
                            onReverseComplete: () => {
                                setCurrent(14);
                            }, 
                            duration: 1
                        })    
                    timeline && timeline.to(
                        el.current,{
                            y: -0,
                            scale: 1.6,
                            onStart: () => {
                                setCurrent(14); 
                            },
                            onReverseComplete: () => {
                                setCurrent(14);
                            }, 
                            duration: 10
                        })    
                    timeline && timeline.to(
                        el.current,{
                            y: - (el.current.offsetHeight * 0.5 + window.outerHeight * 0.1),
                            scale: 1,
                            onStart: () => {
                                setCurrent(14); 
                                },
                            onReverseComplete: () => {
                                setCurrent(14);
                            }, 
                            duration: 1
                        })                                     

    }, [timeline, setCurrent]);


    
    return (
        <div id="box" className="box" ref={el}>
            <img src={indices[current]}/>
        </div>
    )
}

const Stripes = ({}) => {
    return (
        <div id="stripes">
            {(() => {
                let rows = [];
                for (let i = 0; i < 4; i++) {
                    rows.push(<div className="stripe" key={i} />);
                }
            return rows;
            })()}
        </div>
    )
}


const Animation = ({}) => {
    const [tl, setTl] = useState();
    const [box_tl, setBoxTl] = useState();
    useLayoutEffect(() => {
        const tl = gsap.timeline();
        const box_tl = gsap.timeline({
            scrollTrigger: {
                start: "top 60%",
                end: "+=14000",
                trigger: "#box",
                scrub: true,
                pin: true,
                markers: false,
                toggleActions: "play none none reverse",
            }
        });
        setTl(tl);
        setBoxTl(box_tl);
        return () => {};
    }, []);


    return (
        <section className="animation">
            <Background1 timeline={tl}/>
            <div id="bg2" className="bg2"/>
            <Title timeline={tl}>
                <h1 className="centered">Cold + Compression<br/>
                    Therapy System</h1>
                <p className="centered">
                    <a href="#" className="discover">discover products</a>
                </p>
            </Title>
            <div id="trigger"/>
            <Box timeline={box_tl}/>
            <Stripes/>
        </section>
    )
}

export default Animation