import { useStaticQuery, graphql } from 'gatsby';

export const useProjects = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 3
                    filter: { fields: { collection: { eq: "projects" } } }
                ) {
                    edges {
                        node {
                            id
                            excerpt(pruneLength: 400)
                            html
                            fields {
                                collection
                                slug
                            }
                            frontmatter {
                                date(formatString: "MMMM DD, YYYY")
                                image {
                                    publicURL
                                }
                                title
                                url
                            }
                        }
                    }
                }
            }
        `,
    );
    return allMarkdownRemark.edges.length > 0
        ? allMarkdownRemark.edges.map((edge) => ({
              date: edge.node.frontmatter.date,
              excerpt: edge.node.excerpt,
              html: edge.node.html,
              id: edge.node.id,
              imageUrl: edge.node.frontmatter.image.publicURL,
              slug: edge.node.fields.slug,
              title: edge.node.frontmatter.title,
              url: edge.node.frontmatter.url,
          }))
        : [];
};
