module.exports = {
    siteMetadata: {
        title: 'brainbrian',
        siteUrl: 'https://brainbrian.com',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-css-modules',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/content/projects`,
            },
        },
        {
            resolve: 'gatsby-plugin-prettier-eslint',
            options: {
                prettier: {
                    patterns: [
                        // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
                        '**/*.{css,scss,less}',
                        '**/*.{json,json5}',
                        '**/*.{graphql}',
                        '**/*.{md,mdx}',
                        '**/*.{html}',
                        '**/*.{yaml,yml}',
                    ],
                },
                eslint: {
                    patterns: '**/*.{js,jsx,ts,tsx}',
                    customOptions: {
                        fix: true,
                        cache: true,
                    },
                },
            },
        },
        {
            resolve: `gatsby-source-twitter`,
            options: {
                credentials: {
                    // TODO: Move to env vars https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
                    consumer_key: 'WhCNPFzoeR28ESB4mG5aQ',
                    consumer_secret:
                        'EZmbAkf0MNuLw0lEfAtI6HaLQHbrB98veoHYLzEa3ok',
                    bearer_token:
                        'AAAAAAAAAAAAAAAAAAAAAES4SgAAAAAAbLyt3sx9TN9nG5MDO2NdaOBp90Y%3DBNC5qIdISBmT194YH6bISkiEbVQjJ3No3Cvo33DwfEwUyZ7UF5',
                },
                queries: {
                    brian: {
                        endpoint: 'statuses/user_timeline',
                        params: {
                            screen_name: 'brianbehrens',
                            include_rts: false,
                            exclude_replies: true,
                            tweet_mode: 'extended',
                        },
                    },
                },
            },
        },
    ],
};
