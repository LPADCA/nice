import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from '../assets/components/layout'
//import { Element } from 'react-scroll'

import "@styles/contact.scss"

const Contact = ({ data, location }) => {
    const [sent, setSent] = useState(0)
    const handleSubmit = (e) => {
        setSent(1);
        e.preventDefault();
    }
    const d = data.prismicContactPage.data
    return (
        <Layout location={location}>
                <section className="contact-form">
                    <div className="container-small">
                        <div className="grid">
                            <div className="left">
                                <h3>{d.title.text}</h3>
                                <h4>Address</h4>
                                <div dangerouslySetInnerHTML={{__html: d.address.html}}/>
                                <h4>Phone</h4>
                                <p>{d.phone}</p>
                                <h4>Email</h4>
                                <p><a href={`mailto:${d.email}`}>{d.email}</a></p>
                            </div>
                            <div className="right">
                                {sent === 0 ? 
                                    <form id="contact-form" method="POST" data-netlify="true" netlify-honeypot="netlify-field" onSubmit={(e)=>handleSubmit(e)}>
                                        <div className="top">
                                            <div className="top-left">
                                                <label htmlFor="fname">Name *</label>
                                                <input name="fname" type="text" required/>
                                                <p className="sub">First name</p>
                                            </div>
                                            <div className="top-right">
                                                <label className="spacer" htmlFor="lname">&nbsp;</label>
                                                <input name="lname" type="text" required/>
                                                <p className="sub">Last name</p>
                                            </div>
                                        </div>
                                        <div className="na">
                                            <label>
                                            Don’t fill this out if you’re human: <input name="netlify-field" />
                                            </label>
                                        </div>
                                        <label htmlFor="email">Email *</label>
                                        <input name="email" type="email" required/>
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input name="phone" type="phone" required/>
                                        <label htmlFor="zip">Zip Code *</label>
                                        <input name="zip" type="text" required/>
                                        <label htmlFor="option">Select one option</label>
                                        <select defaultValue={'general'} name="option">
                                            <option value="general">General Inquiries</option>
                                            <option value="surgeon">Surgeon</option>
                                            <option value="patient">Patient</option>
                                            <option value="trainer">Trainer</option>
                                        </select>
                                        <label htmlFor="notes">Notes</label>
                                        <textarea name="notes"/>
                                        <button type="submit" value="Submit" className="button with-arrow">Submit</button>
                                    </form>
                                    :
                                    <div className="sent" dangerouslySetInnerHTML={{__html: d.message.html}}/>
                                    }
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
    )
}

export default Contact

export const howToQuery = graphql`
    query Contact {
        prismicContactPage {
            data {
                email
                phone
                title {
                    text
                }
                address {
                    html
                }
                message {
                    html
                }
            }
        }
    }
`