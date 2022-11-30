import { graphql } from 'gatsby'

const notFound404 = ({ location, data }) => {
    useEffect(() => {
        if (document.referrer.indexOf(process.env.GATSBY_LOCALE_LINK) !== -1) {
            navigate("/", { replace: true })
        }
    }, [])

    return (
        <></>
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
