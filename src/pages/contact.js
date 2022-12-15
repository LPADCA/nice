import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../assets/components/layout'
import { Element } from 'react-scroll'

import "@styles/index.scss"

const Contact = ({ data, location }) => {
    return (
        <Layout location={location}>
                <section>
                    <div className="container" style={{textAlign: 'center'}}>[CONTACT FORM]</div>
                </section>
        </Layout>
    )
}

export default Contact

export const howToQuery = graphql`
    query Contact {
        prismicHomepage {
            data {
                title {
                    html
                    raw
                    text
                }
            }
        }
    }
`