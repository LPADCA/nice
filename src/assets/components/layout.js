import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "@styles/default.scss"

const Layout = ({ location, children, seo_title, seo_description, seo_keywords, ...props }) => {
    const { site } = useStaticQuery(graphql`
        query SeoQuery {
            site {
                siteMetadata {
                    description
                    title
                }
            }
        }
    `)
    const title = seo_title || site.siteMetadata.title
    const description = seo_description || site.siteMetadata.description
    const keywords = seo_keywords || ""
    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: process.env.GATSBY_LOCALE,
                }}
            >
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta httpEquiv="cache-control" content="no-cache" />
                <meta httpEquiv="expires" content="0" />
                <meta httpEquiv="pragma" content="no-cache" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:image" content="" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:locale" content={process.env.GATSBY_LOCALE} />
            </Helmet>
            <Header location={location} />
            <main {...props}>{children}</main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

Layout.pickSeoProps = ({ seo_description, seo_title, seo_keywords }) => ({
    seo_description,
    seo_title,
    seo_keywords,
})

export default Layout
