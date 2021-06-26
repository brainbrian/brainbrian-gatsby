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
            <Head title={`${frontmatter.title} | Posts | Brian Behrens`} />
            <Header />
            <main className="content">
                <div className="post-container">
                    <article className="post">
                        <h1>{frontmatter.title}</h1>
                        <h3>{frontmatter.date}</h3>
                        <div
                            className="post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}

export const pageQuery = graphql`
    query ($slug: String!) {
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
