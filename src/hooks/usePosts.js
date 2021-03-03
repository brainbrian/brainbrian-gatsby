import { useStaticQuery, graphql } from 'gatsby';

export const usePosts = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 5
                    filter: { fields: { collection: { eq: "posts" } } }
                ) {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                date(formatString: "MMMM DD, YYYY")
                                title
                            }
                        }
                    }
                }
            }
        `,
    );
    return allMarkdownRemark.edges.map((edge) => ({
        date: edge.node.frontmatter.date,
        id: edge.node.id,
        slug: edge.node.fields.slug,
        title: edge.node.frontmatter.title,
    }));
};
