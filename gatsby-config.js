require('dotenv').config({
    path: `.env`,
});

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
                    consumer_key: process.env.TWITTER_CONSUMER_KEY,
                    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
                    bearer_token: process.env.TWITTER_BEARER_TOKEN,
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
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            width: 960,
                            ratio: 1.77,
                            related: false,
                            noIframeBorder: true,
                            urlOverrides: [
                                {
                                    id: 'youtube',
                                    embedURL: (videoId) =>
                                        `https://www.youtube-nocookie.com/embed/${videoId}`,
                                },
                            ],
                            containerClass: 'post-video-container',
                        },
                    },
                ],
            },
        },
    ],
};
