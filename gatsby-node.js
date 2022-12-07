const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@assets": path.resolve(__dirname, "src/assets"),
                "@components": path.resolve(__dirname, "src/components"),
                "@static": path.resolve(__dirname, "static"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@utils": path.resolve(__dirname, "src/utils"),
            },
        },
    })
}

const wrapper = (promise) =>
    promise.then((result) => {
        if (result.errors) {
            throw result.errors
        }
        return result
    })

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const generatePages = await wrapper(
        graphql(`

            {
                allPrismicProducts {
                    edges {
                        node {
                            uid
                        }
                    }
                }
                allPrismicInformationPage {
                    edges {
                        node {
                            uid
                        }
                    }
                }
            }
        `)
    )

    generatePages.data.allPrismicProducts.edges.forEach((edge) => {
        createPage({
            type: "products",
            path: `/${edge.node.uid}`,
            component: path.resolve("src/templates/products.js"),
            context: {
                uid: `${edge.node.uid}`,
            },
        })
    })

    generatePages.data.allPrismicInformationPage.edges.forEach((edge) => {
        createPage({
            type: "information_page",
            path: `/${edge.node.uid}`,
            component: path.resolve("src/templates/other.js"),
            context: {
                uid: `${edge.node.uid}`,
            },
        })
    })

}
