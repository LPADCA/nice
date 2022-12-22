import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from '../assets/components/layout'
import { Link as ScrollLink, Element } from 'react-scroll'
import ReactPlayer from 'react-player'
import AnimateHeight from 'react-animate-height';

import "@styles/howto.scss"

const InstructionsElement = ({question, filename}) => {
    const [height, setHeight] = useState(0);
    return (
        <div className={`element ${height !== 0 ? 'open' : ''}`}>
            <button className="question" onClick={() => setHeight(height === 0 ? 'auto' : 0)}>
                {question}
            </button>
            <AnimateHeight
            id="example-panel"
            duration={500}
            height={height}
            >
                <div className="answer">
                    <a href={filename} target="_blank" rel="noreferrer">Download PDF</a>
                </div>
                    
            </AnimateHeight>
        </div>
    );
  };

const HowTo = ({ data, location }) => {
    return (
        <Layout location={location} {...Layout.pickSeoProps(data.prismicHowtoPage.data)}>
                <section className="links centered">
                    <ScrollLink className="dark" to="qs" smooth={true} offset={-100}>Quick Start</ScrollLink>
                    <ScrollLink className="dark" to="videos" smooth={true}>How-To Videos</ScrollLink>
                    <ScrollLink className="dark" to="instr" smooth={true}>Instructions</ScrollLink>
                </section>
            <Element name="qs"/>
            <section className="quickstart">
                    <div className="container-medium">
                        <h2 className="centered">{data.prismicHowtoPage.data.title_quickstart.text}</h2>
                        <div className="grid">
                            {data.prismicHowtoPage.data.slide.map((item, i) => (
                                <>
                                    <img src={item.illustration.url} alt={item.illustration.alt}/>
                                    <div dangerouslySetInnerHTML={{__html: item.text.html}}/>
                                </>
                            ))}
                        </div>
                    </div>
                </section>

                <Element name="videos"/>
                <section className="videos">
                    <div className="container-medium">
                        <h2 className="centered">{data.prismicHowtoPage.data.title_videos.text}</h2>
                        <div className="grid">
                            {data.prismicHowtoPage.data.videos.map((item, i) => (
                                <div key={i} className='player-wrapper'>
                                    <ReactPlayer 
                                        className="react-player" 
                                        url={item.video_url} 
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                            ) )}
                        </div>
                    </div>
                </section>
                <Element name="instr"/>
                <section className="instructions">
                    <div className="container-small">
                        <h2 className="centered">{data.prismicHowtoPage.data.title_user_manual.text}</h2>
                        <p className="centered">
                            <a href={data.prismicHowtoPage.data.link.url} target="_blank" without rel="noreferrer">Download the complete NICE1 user manual</a>
                        </p>
                    </div>

                    <div className="container-small">
                        <h2 className="centered">{data.prismicHowtoPage.data.title_user_wraps.text}</h2>
                        {data.prismicHowtoPage.data.block.map((item,i)=>(
                            <InstructionsElement key={i} question={item.name} filename={item.download_link.url}/>
                        ))}
                    </div>
                </section>


        </Layout>
    )
}

export default HowTo

export const howToQuery = graphql`
    query HowTo {
        prismicHowtoPage {
            data {
                videos {
                    video_url
                }
                title_videos {
                    text
                }
                title_quickstart {
                    text
                }
                slide {
                    illustration {
                        alt
                        url
                    }
                    text {
                        html
                    }
                }
                title_user_manual {
                    text
                }
                link {
                    url
                }
                block {
                    name
                    download_link {
                        url
                    }
                }
                title_user_wraps {
                    text
                }
                seo_title
                seo_description
                seo_keywords
            }
        }
    }
`