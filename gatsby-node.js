const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const parent = getNode(node.parent);
        const collection = parent.sourceInstanceName;
        createNodeField({
            node,
            name: 'collection',
            value: collection,
        });
        const slug = createFilePath({ node, getNode });
        createNodeField({
            node,
            name: `slug`,
            value: `/${collection}${slug}`,
        });
    }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const postTemplate = require.resolve('./src/templates/post.jsx');
    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                filter: { fields: { collection: { eq: "posts" } } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }
    const posts = result.data.allMarkdownRemark.edges;
    // create individual blog pages
    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: postTemplate,
            context: {
                // additional data can be passed via context
                slug: node.fields.slug,
            },
        });
    });
    // Create blog-list pages
    const postsPerPage = 20;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/posts` : `/posts/${i + 1}`,
            component: path.resolve('./src/templates/posts.jsx'),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
    const projectTemplate = require.resolve('./src/templates/project.jsx');
    // Create project pages
    const resultProjects = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                filter: { fields: { collection: { eq: "projects" } } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    // Handle errors
    if (resultProjects.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }
    const projects = resultProjects.data.allMarkdownRemark.edges;
    // create individual blog pages
    projects.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: projectTemplate,
            context: {
                // additional data can be passed via context
                slug: node.fields.slug,
            },
        });
    });

    // TODO: Create individual project pages
    const postsPerPageProjects = 10;
    const numPagesProjects = Math.ceil(projects.length / postsPerPageProjects);
    Array.from({ length: numPagesProjects }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/projects` : `/projects/${i + 1}`,
            component: path.resolve('./src/templates/projects.jsx'),
            context: {
                limit: postsPerPageProjects,
                skip: i * postsPerPageProjects,
                numPages: numPagesProjects,
                currentPage: i + 1,
            },
        });
    });
};
