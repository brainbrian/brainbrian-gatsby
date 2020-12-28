/*
import React from 'react';

import { graphql } from 'gatsby';

import { Footer, Head, Header } from '../components';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <>
            <Head />
            <Header />
            <main className="content">
                <div className="blog-post-container">
                    <div className="blog-post">
                        <h1>{frontmatter.title}</h1>
                        <h2>{frontmatter.date}</h2>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`;
*/
