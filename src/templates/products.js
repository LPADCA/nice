import React from "react"
import { graphql } from "gatsby"
import Layout from '../assets/components/layout'
import "@styles/products.scss"

const productPage = ({ data, location }) => {
    return (
        <Layout>
            <div className="product-page">
                <div className="container">
                    <h1 className="centered">{data.prismicProducts.data.title.text}</h1>
                    <div className="container-small" dangerouslySetInnerHTML={{__html: data.prismicProducts.data.contents.html}} />
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
            }
        }
    }`