import React from "react"
import { graphql } from "gatsby"
import Layout from '../assets/components/layout'
import "@styles/products.scss"

const productPage = ({ data, location }) => {
    return (
        <Layout location={location} {...Layout.pickSeoProps(data.prismicProducts.data)}>
            <div className="product-page">
                <div className="container-small">
                    <h1 className="centered">{data.prismicProducts.data.title.text}</h1>
                    <div dangerouslySetInnerHTML={{__html: data.prismicProducts.data.contents.html}} />
                </div>
            </div>
        </Layout>
    )
}

export default productPage

export const query = graphql`
    query informationPageQuery($uid: String) {
        prismicProducts(uid: { eq: $uid }) {
            data {
                title {
                    text
                }
                contents {
                    html
                }
                seo_title
                seo_description
                seo_keywords
            }
        }
    }`