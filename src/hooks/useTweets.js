import { useStaticQuery, graphql } from 'gatsby';

export const useTweets = () => {
    const { allTwitterStatusesUserTimelineBrian } = useStaticQuery(
        graphql`
            query {
                allTwitterStatusesUserTimelineBrian(limit: 5) {
                    edges {
                        node {
                            id_str
                            created_at
                            full_text # or text depending by endpoint params
                        }
                    }
                }
            }
        `,
    );
    return allTwitterStatusesUserTimelineBrian.edges.map((edge) => ({
        date: edge.node.created_at,
        text: edge.node.full_text,
        url: `https://twitter.com/brianbehrens/status/${edge.node.id_str}`,
    }));
};
