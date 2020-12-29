import * as React from 'react';

import { usePosts, useTweets } from '../../hooks';

import Styles from './Footer.module.scss';

export const Footer = () => {
    const posts = usePosts();
    const tweets = useTweets();

    return (
        <>
            <aside className={`content ${Styles.Aside}`}>
                <section>
                    <a href="/posts" className="header-bar">
                        <h3 className="header-bar__text">From The Brain</h3>
                    </a>
                    <ul className={Styles.List}>
                        {posts.map(({ id, slug, title }) => (
                            <li key={id} className={Styles.ListItemBrain}>
                                <a href={slug}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <a
                        href="https://twitter.com/brianbehrens"
                        className="header-bar"
                    >
                        <h3 className="header-bar__text">Tweets</h3>
                    </a>
                    <ul className={Styles.List}>
                        {tweets.map(({ date, text, url }, index) => (
                            <li key={index} className={Styles.ListItemTweet}>
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
