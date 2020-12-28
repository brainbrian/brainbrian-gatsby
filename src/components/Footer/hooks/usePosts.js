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
                                title
                            }
                        }
                    }
                }
            }
        `,
    );
    return allMarkdownRemark.edges.map((edge) => ({
        id: edge.node.id,
        slug: edge.node.fields.slug,
        title: edge.node.frontmatter.title,
    }));
};
