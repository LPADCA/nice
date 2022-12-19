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
                    {opacity: 1, duration: 1},
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







const Animation = ({}) => {
    const [tl, setTl] = useState();
    const [tl2, setTl2] = useState();
    const wrapperRef = useRef();
    const videoRef = useRef();
    const sizes = [
        [1920, 1080]
    ]
    useEffect(() => {
        videoRef.current.currentTime = 0
        const tl = gsap.timeline({
            scrollTrigger: {
                start: "top top",
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
                <h1 className="centered">Cold + Compression<br/>
                    Therapy System</h1>
                <p className="centered">
                    <a href="#" className="discover">discover products</a>
                </p>
            </Title>
            <div id="trigger"/>
            <div id="video-wrapper" className="video-wrapper" ref={wrapperRef}>
                <video ref={videoRef} className="video" src="/images/animation/video_1080p.mp4" playsInline={true} webkit-playsinline="true" preload="auto" muted="muted"/>
            </div>
            <Block timeline={tl2} cls="b1" start="+=2000 bottom" end="+=3000 top">
                <h3>No Ice</h3>
                <p>NICE1 is an iceless system. 
                This is a clear point of differentiation when compared with other cold therapy devices.</p>
            </Block>
            <Block timeline={tl2} cls="b1" start="+=4000 bottom" end="+=5000 top">
                <h3>Smaller + Lighter</h3>
                <p>NICE1 is the smallest and lightest cold + compression therapy device on the market.</p>
            </Block>
            <Block timeline={tl2} cls="b1" start="+=6000 bottom" end="+=7000 top">
                <h3>Design forward</h3>
                <p>NICE1 is focused on a superior user experience, blending pro-tested design with state-of-the-art technology.</p>
            </Block>
            <Block timeline={tl2} cls="b1" start="+=8000 bottom" end="+=9000 top">
                <h3>Simplicity</h3>
                <p>NICE1 has an extremely intuitive graphical touch screen interface that makes it easy to operate.</p>
            </Block>

            <Block timeline={tl2} cls="c c1" start="+=10000 bottom" end="+=13000 top">
                <h3>No Ice</h3>
                <p>NICE1 is an iceless system. 
                This is a clear point of differentiation when compared with other cold therapy devices.</p>
            </Block>
            <Block timeline={tl2} cls="c c2" start="+=10000 bottom" end="+=13000 top">
                <h3>Smaller + Lighter</h3>
                <p>NICE1 is the smallest and lightest cold + compression therapy device on the market.</p>
            </Block>
            <Block timeline={tl2} cls="c c3" start="+=10000 bottom" end="+=13000 top">
                <h3>Design forward</h3>
                <p>NICE1 is focused on a superior user experience, blending pro-tested design with state-of-the-art technology.</p>
            </Block>
            <Block timeline={tl2} cls="c c4" start="+=10000 bottom" end="+=13000 top">
                <h3>Simplicity</h3>
                <p>NICE1 has an extremely intuitive graphical touch screen interface that makes it easy to operate.</p>
            </Block>


        </section>
    )
}

export default Animation