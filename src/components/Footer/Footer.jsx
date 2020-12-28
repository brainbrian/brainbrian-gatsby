import * as React from 'react';

import Styles from './Footer.module.scss';

export const Footer = () => (
    <>
        <div className="content">
            <section>
                <a href="/posts">
                    <h3>From The Brain</h3>
                </a>
                <ul>
                    <li>So we moved to Los Angeles</li>
                    <li>Learning to Walk the Nose on my Longboard</li>
                    <li>Surfing Westport, WA on a clean winter day</li>
                    <li>Testing out</li>
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
