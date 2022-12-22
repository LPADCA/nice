import React, {useState} from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import AnimateHeight from 'react-animate-height';
import "@styles/faq.scss"

const Element = (data) => {
    const [height, setHeight] = useState(0);
    return (
        <div className={`element ${height !== 0 ? 'open' : ''}`}>
            <button className="question dark" onClick={(e) => {setHeight(height === 0 ? 'auto' : 0);e.preventDefault()}} onKeyUp={(e)=>{if (e.key === 'Enter') {setHeight(height === 0 ? 'auto' : 0);e.preventDefault()}}}>
                {data.item.question}
            </button>
            <AnimateHeight
            id="example-panel"
            duration={500}
            height={height}
            >
                <div className="answer" dangerouslySetInnerHTML={{__html: data.item.answer.html}}/>
            </AnimateHeight>
        </div>
    );
  };


const Faq = () => {
return (
    <StaticQuery
        query={graphql`
            query FaqQuery {
                prismicFaq {
                    data {
                        title {
                            text
                        }
                        button_text
                        header {
                            text
                        }
                        questions {
                            question
                            answer {
                                html
                            }
                        }
                        text {
                            html
                        }
                    }
                }
            }           
        `}
        render={data => (
            <section className="faq">
                <div className="container">
                    <h2>{data.prismicFaq.data.title.text}</h2>
                    <div className="grid">
                        <div className="left">
                            <div className="card">
                                <h4>{data.prismicFaq.data.header.text}</h4>
                                <div dangerouslySetInnerHTML={{__html:data.prismicFaq.data.text.html}}/>
                                <Link to="" className="button with-arrow white lite">{data.prismicFaq.data.button_text}</Link>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                {data.prismicFaq.data.questions.map((item, i) => (
                                    <Element key={i} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
        }
    />
)
}

export default Faq