import React, {useState , useRef, useEffect, useLayoutEffect} from "react"
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
                    end: "top top-=100",
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
    const wrapperRef = useRef();
    const videoRef = useRef();
    //const sizes = [
    //    [1920, 1080]
    //]
    const time_triggers = [
        [2000, 3000],
        [4000, 5000],
        [6000, 7000],
        [8000, 9000],
    ]
    useEffect(() => {
        videoRef.current.currentTime = 0
        const tl = gsap.timeline({
            scrollTrigger: {
                start: "top top+=2",
                end: "+=12000",
                trigger: wrapperRef.current,
                scrub: true,
                //pin: true,
                toggleActions: "play none none reverse",
                onUpdate: function(self) { 
                    if(videoRef.current) {
                      let scrollPos = self.progress;
                      let videoDuration = videoRef.current.duration;
                      let videoCurrentTime = videoDuration * scrollPos;
                      
                      if(videoCurrentTime) {
                        videoRef.current.currentTime = videoCurrentTime;
                      }
                      //console.log(videoDuration, scrollPos, videoCurrentTime)
                    }
                },
            } 
        });
        tl.to(
            wrapperRef.current,
            {
                opacity: 0,
                scrollTrigger: {
                    start: "+=13000",
                    end: "+=1000",
                    trigger: wrapperRef.current,
                    scrub: true,
                    toggleActions: "play none none reverse",
                }
            }
        )
        setTl(tl);
        const tl2 = gsap.timeline({});
        setTl2(tl2);
        return () => {};
    }, [wrapperRef, videoRef]);


    return (
        <section className="animation">
            <Title timeline={tl2}>
                <div className="welcome centered" dangerouslySetInnerHTML={{__html: title.html}} />
                <p className="centered">
                    <a href="/nice1" className="discover">discover</a>
                </p>
            </Title>
            <div id="trigger"/>
            <div id="video-wrapper" className="video-wrapper" ref={wrapperRef}>
                <video ref={videoRef} className="video" src="/images/animation/video_1080p.mp4" playsInline={true} webkit-playsinline="true" preload="auto" muted="muted"/>
            </div>
            {blocks.map((block, i) => (
                <Block key={i} timeline={tl2} cls="b1" start={`${time_triggers[i][0]} bottom`} end={`${time_triggers[i][1]} top`}>
                    <h3>{block.header}</h3>
                    <p>{block.text}</p>
                </Block>
            ))}

            {blocks.map((block, i) => (
                <Block key={i} timeline={tl2} cls={`c c${i+1}`} start="10000 bottom" end="13000 top">
                    <h3>{block.header}</h3>
                    <p>{block.text}</p>
                </Block>
            ))}
        </section>
    )
}

export default Animation