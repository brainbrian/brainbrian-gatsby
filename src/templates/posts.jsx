import React from 'react';

import { graphql } from 'gatsby';

import { Footer, Head, Header, Pagination, PostLink } from '../components';

const Posts = ({
    data: {
        allMarkdownRemark: { edges },
    },
    pageContext,
}) => {
    const posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <Head
                title="Posts | Brian Behrens | Los Angeles Software Engineer"
                description="Posts (blogs) from Brian Behrens of my adventures and journey in coding."
            />
            <Header />
            <main className="content">
                {posts}
                <Pagination
                    basePath="/posts/"
                    currentPage={currentPage}
                    numPages={numPages}
                />
            </main>
            <Footer />
        </>
    );
};

export default Posts;

export const pageQuery = graphql`
    query postsQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "posts" } } }
            limit: $limit
            skip: $skip
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
