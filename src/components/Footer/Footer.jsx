import * as React from 'react';

import { usePosts } from './hooks/usePosts';

import Styles from './Footer.module.scss';

export const Footer = () => {
    const posts = usePosts();

    return (
        <>
            <div className="content">
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
                        <li>Tweet 1 text shows up here</li>
                        <li>Tweet 1 text shows up here</li>
                        <li>Tweet 1 text shows up here</li>
                        <li>Tweet 1 text shows up here</li>
                    </ul>
                </section>
            </div>
            <footer className={Styles.Footer}>
                © 2020 Brain Brian (Brian Behrens)
            </footer>
        </>
    );
};
