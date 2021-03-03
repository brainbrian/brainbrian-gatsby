import React from 'react';

import { graphql } from 'gatsby';

import { Footer, Head, Header, Pagination, Project } from '../components';

const Projects = ({
    data: {
        allMarkdownRemark: { edges },
    },
    pageContext,
}) => {
    const projects = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => (
            <Project
                excerpt={edge.node.excerpt}
                id={edge.node.id}
                imageUrl={edge.node.frontmatter.image.publicURL}
                key={edge.node.id}
                slug={edge.node.fields.slug}
                title={edge.node.frontmatter.title}
                url={edge.node.frontmatter.url}
            />
        ));
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <Head
                title="Projects | Brian Behrens | Los Angeles Software Engineer"
                description="A listing of completed projects by Brian Behrens."
            />
            <Header />
            <main className="content">
                {projects}
                <Pagination
                    basePath="/projects/"
                    currentPage={currentPage}
                    numPages={numPages}
                />
            </main>
            <Footer />
        </>
    );
};

export default Projects;

export const pageQuery = graphql`
    query projectsQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { collection: { eq: "projects" } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 400)
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
