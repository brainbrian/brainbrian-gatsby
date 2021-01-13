import React from 'react';

import { graphql } from 'gatsby';

import { Footer, Head, Header, Project } from '../components';

const ProjectPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const projects = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => (
            <Project
                key={edge.node.id}
                id={edge.node.id}
                html={edge.node.html}
                imageUrl={edge.node.frontmatter.image.publicURL}
                title={edge.node.frontmatter.title}
                url={edge.node.frontmatter.url}
            />
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
