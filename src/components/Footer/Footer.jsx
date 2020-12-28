import * as React from 'react';

import { usePosts, useTweets } from './hooks';

import Styles from './Footer.module.scss';

export const Footer = () => {
    const posts = usePosts();
    const tweets = useTweets();

    return (
        <>
            <aside className="content">
                <section>
                    <a href="/posts">
                        <h3>From The Brain</h3>
                    </a>
                    <ul>
                        {posts.map(({ id, slug, title }) => (
                            <li key={id}>
                                <a href={slug}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <a href="https://twitter.com/brianbehrens">
                        <h3>Tweets</h3>
                    </a>
                    <ul>
                        {tweets.map(({ date, text, url }, index) => (
                            <li key={index}>
                                <p>{text}</p>
                                <a href={url}>{date}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </aside>
            <footer className={Styles.Footer}>
                © 2020 Brain Brian (Brian Behrens)
            </footer>
        </>
    );
};
