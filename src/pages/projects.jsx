import React from 'react';

import { graphql } from 'gatsby';

import { Footer, Head, Header } from '../components';

const ProjectPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const projects = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => (
            <div key={edge.node.id}>
                <a href={edge.node.frontmatter.url}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    {edge.node.frontmatter.image && (
                        <img
                            src={edge.node.frontmatter.image.publicURL}
                            alt={`${edge.node.frontmatter.title} Sample`}
                        />
                    )}
                </a>
                <div
                    className="project-content"
                    dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
            </div>
        ));

    return (
        <>
            <Head />
            <Header />
            <main className="content">{projects}</main>
            <Footer />
        </>
    );
};

export default ProjectPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fields: { collection: { eq: "projects" } } }
        ) {
            edges {
                node {
                    id
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
`;
