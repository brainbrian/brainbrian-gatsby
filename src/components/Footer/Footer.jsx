import * as React from 'react';

import { usePosts, useTweets } from '../../hooks';

import Styles from './Footer.module.scss';

export const Footer = () => {
    const posts = usePosts();
    const tweets = useTweets();

    return (
        <div className="bg-page">
            <aside className={`content ${Styles.Aside}`}>
                <section>
                    <a href="/posts" className="header-bar">
                        <h2 className="header-bar__text">From The Brain</h2>
                    </a>
                    <ul className={Styles.List}>
                        {posts.map(({ date, id, slug, title }) => (
                            <li key={id} className={Styles.ListItemBrain}>
                                <p>
                                    <a href={slug}>
                                        {title} <span>{date}</span>
                                    </a>
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <a
                        href="https://twitter.com/brianbehrens"
                        className="header-bar"
                    >
                        <h2 className="header-bar__text">Tweets</h2>
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
                &copy; {new Date().getFullYear()} Brain Brian (Brian Behrens) –{' '}
                Powered by coffee, froth, salt water and curiosity –{' '}
                <a href="https://www.brainbrian.com">brainbrian.com</a>
            </footer>
        </div>
    );
};
