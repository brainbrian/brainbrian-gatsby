import React from 'react';

import { graphql } from 'gatsby';

import { Footer, Head, Header, PostLink } from '../components';

const BlogPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <>
            <Head />
            <Header />
            <main className="content">{posts}</main>
            <Footer />
        </>
    );
};

export default BlogPage;

// TODO: Add pagination - https://www.gatsbyjs.com/docs/adding-pagination/
export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { collection: { eq: "posts" } } }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
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
`;
