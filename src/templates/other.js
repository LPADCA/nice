import React from "react"
import { graphql } from "gatsby"
import Layout from '../assets/components/layout'
import "@styles/infopage.scss"

const infoPage = ({ data, location }) => {
    return (
        <Layout>
            <div className="info-page">
                <div className="container">
                    <h1 className="centered">{data.prismicInformationPage.data.title.text}</h1>
                    <div className="container-small" dangerouslySetInnerHTML={{__html: data.prismicInformationPage.data.content.html}} />
                </div>
            </div>
        </Layout>
    )
}

export default infoPage

export const query = graphql`
    query infoPageQuery($uid: String) {
        prismicInformationPage(uid: { eq: $uid }) {
            data {
                title {
                    text
                }
                content {
                    html
                }
            }
        }
    }`