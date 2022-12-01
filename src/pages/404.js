import React from "react"
import { graphql } from 'gatsby'

const notFound404 = ({ location, data }) => {
    return (
        <div>_</div>
    )
}

export default notFound404

export const query = graphql`
    query NotFound {
        prismic404 {
            data {
                not_found_message {
                    html
                }
            }
        }
    }
`
