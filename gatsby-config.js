require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const linkResolver = require("./src/utils/linkResolver")
module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL || "https://sonderly.io/",
        title: "Sonderly",
        description:
            "An educational and training platform for professionals and educators seeking to learn more about autism and mental health.",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    quality: 100,
                    backgroundColor: "transparent",
                },
            },
        },
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
                    homepage: require("./src/schemas/homepage.json"),
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
        },*/
        {
            resolve: "gatsby-plugin-svgr",
            options: {
                svgo: true,
                svgoConfig: {
                    removeViewBox: false,
                },
            },
        },
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
