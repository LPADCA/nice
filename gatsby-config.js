require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const linkResolver = require("./src/utils/linkResolver")
module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL || "https://nicerecovery.com/",
        title: "NICE Recovery",
        description:
            "Nice ",
    },
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY,
                accessToken: process.env.PRISMIC_TOKEN,
                //linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
                linkResolver: () => (doc) => linkResolver(doc),
                lang: process.env.GATSBY_LOCALE ? process.env.GATSBY_LOCALE : "en-us",
                schemas: {
                    products: require("./src/schemas/products.json"),
                    information_page: require("./src/schemas/other.json"),
                    homepage: require("./src/schemas/homepage.json"),
                    testimonials: require("./src/schemas/testimonials.json"),
                    faq: require("./src/schemas/faq.json"),
                    404: require("./src/schemas/404.json"),
                    // Your custom types mapped to schemas
                },
                imageImgixParams: {
                    auto: "compress,format",
                    fit: "max",
                    q: 50,
                },
                //page: require("./src/schemas/page.json"),
            },
        },
        /*
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: process.env.GOOGLE_ID,
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: process.env.FACEBOOK_PIXEL_ID,
            },
        },
        {
            resolve: "gatsby-plugin-svgr",
            options: {
                svgo: true,
                svgoConfig: {
                    removeViewBox: false,
                },
            },
        },*/
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Nice",
                short_name: "Nice",
                start_url: "/",
                background_color: "white",
                display: "minimal-ui",
                icon: "src/assets/icons/logo/favicon.ico",
            },
        },
    ],
}
