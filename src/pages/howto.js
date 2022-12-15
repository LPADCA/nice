import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../assets/components/layout'
import { Element } from 'react-scroll'
import ReactPlayer from 'react-player'
import AnimateHeight from 'react-animate-height';

import "@styles/howto.scss"

const InstructionsElement = ({question, filename}) => {
    const [height, setHeight] = useState(0);
    return (
        <div className={`element ${height !== 0 ? 'open' : ''}`}>
            <p className="question" onClick={() => setHeight(height === 0 ? 'auto' : 0)}>
                {question}
            </p>
            <AnimateHeight
            id="example-panel"
            duration={500}
            height={height}
            >
                <div className="answer">
                    <a href={`/downloads/${filename}`} target="_blank">Download PDF</a>
                </div>
                    
            </AnimateHeight>
        </div>
    );
  };

const HowTo = ({ data, location }) => {
    console.log(data)
    return (
        <Layout location={location}>
                <section className="quickstart">
                    <div className="container-medium">
                        <h2 className="centered">Quick Start Guide</h2>
                        <div className="grid">
                            <img src="/images/1a-1.jpeg"/>
                            <div>
                                Connect the power cord to the external power supply. Plug the circular connector into the back of the Cooling Unit. You will hear a click when properly connected. Plug the power cord into the wall outlet.
                            </div>

                            <img src="/images/hose1.jpeg"/>
                            <div>
                                Connect the hose to the control unit. You will hear a click when properly connected.
                            </div>

                            <img src="/images/3a.jpeg"/>
                            <div>
                                Place the wrap on the appropriate body part. Secure with Velcro strips. Connect the hose to the wrap. You will hear a click when properly connected.
                            </div>

                            <img src="/images/NICE1_UI_v1-03.png"/>
                            <div>
                                <h5>Step 1</h5>
                                Turn on the power switch on the back of the device. The touch screen will illuminate and display the “Nice” logo. Press Start. Review the checklist on the touch screen. Confirm and press <strong>NEXT</strong>.
                            </div>

                            <img src="/images/NICE1_UI_v1-09.png"/>
                            <div>
                                <h5>Step 2</h5>
                                Select desired <strong>COLD LEVEL</strong> and press <strong>NEXT</strong>. (level 5 is the coldest setting)
                                <p><strong>Cold settings are as follows:</strong></p>
                                <p>Level 1 = 58F (14.4C)</p>
                                <p>Level 2 = 54F (12.4C)</p> 
                                <p>Level 3 = 50F (10C)</p>
                                <p>Level 4 = 46F (7.7C)</p>
                                <p>Level 5 = 42F (5.5C)</p>
                            </div>

                            <img src="/images/NICE1_UI_v1-12.png"/>
                            <div>
                                <h5>Step 3</h5>
                                Select desired <strong>COMPRESSION LEVEL</strong> and <strong>COMPRESSION TYPE</strong> and press <strong>NEXT</strong>.
                            </div>

                            <img src="/images/NICE1_UI_v1-14.png"/>
                            <div>
                                <h5>Step 4</h5>
                                Choose a <strong>MANUAL</strong> time setting of 5 – 40 minutes for a single therapy session OR choose a <strong>PRESET PROGRAM</strong> for multiple sessions and press <strong>NEXT</strong>.
                            </div>

                            <img src="/images/confirm.jpeg"/>
                            <div>
                                <h5>Step 5</h5>
                                Review and confirm your settings by pressing <strong>START</strong> or press <strong>BACK</strong> to change the settings.
                            </div>

                            <img src="/images/NICE1_UI_v1-11.png"/>
                            <div>
                                <h5>Step 6</h5>
                                During your therapy session you can change the cold or compression settings simply by pressing <strong>1 – 5</strong> or <strong>HIGH</strong>, <strong>MED</strong> or <strong>LOW</strong>. To Dim, Press Dim switch, to brighten – touch screen.
                            </div>



                        </div>
                    </div>
                </section>

                <section className="videos">
                    <div className="container-medium">
                        <h2 className="centered">How-To Videos</h2>
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

                <section className="instructions">
                    <div className="container-small">
                        <h2 className="centered">User Manual</h2>
                        <p className="centered">
                            <a href="/downloads/Nice1_User_manual.pdf" target="_blank">Download the complete NICE1 user manual</a>
                        </p>
                    </div>
                    <div className="container-small">
                        <h2 className="centered">Therapy Wraps Instructions</h2>
                        <InstructionsElement question="Knee" filename="3-301002-IFU+Knee+Rev+A.pdf"/>
                        <InstructionsElement question="Ankle" filename="3-301003-IFU+Ankle+Rev+A.pdf"/>
                        <InstructionsElement question="Lumbar" filename="3-301004-IFU+Lumbar+Rev+A.pdf"/>
                        <InstructionsElement question="Wrist" filename="3-301005-IFU+Wrist+Rev+A.pdf"/>
                        <InstructionsElement question="Shoulder" filename="3-301006-IFU+Shoulder+Rev+A.pdf"/>
                        <InstructionsElement question="Articulating Knee" filename="3-301007-IFU+Articulating+Knee+Rev+A.pdf"/>
                        <InstructionsElement question="Hip" filename="3-301008-IFU+Hip+Rev+A.pdf"/>
                        <InstructionsElement question="All of the above" filename="IFUs.zip"/>
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
            }
        }
    }
`