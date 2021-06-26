import * as React from 'react';

import { Footer, Head, Header, Panel, ProjectsRecent } from '../components';

import '../styles/Styles.scss';

const IndexPage = () => (
    <>
        <Head />
        <Header />
        <main>
            <Panel videoUrl="./videos/bg-hero.mp4">
                <article className="content">
                    <h1>Hello, I'm Brian Behrens.</h1>
                    <h2>I am a software engineer.</h2>
                    <p>
                        I live,{' '}
                        <a href="https://www.linkedin.com/in/brianbehrens">
                            work
                        </a>
                        /<a href="https://github.com/brainbrian">code</a> in Los
                        Angeles. I’m a{' '}
                        <a href="https://www.youtube.com/watch?v=HsHbL8FWqMw">
                            surfer
                        </a>
                        ,{' '}
                        <a href="https://www.youtube.com/watch?v=ehikEw8HsbY">
                            snowboarder
                        </a>
                        ,{' '}
                        <a href="https://www.twitter.com/brianbehrens">
                            tweeter
                        </a>
                        ,{' '}
                        <a href="https://www.strava.com/athletes/brianbehrens">
                            cyclist
                        </a>{' '}
                        and a{' '}
                        <a href="https://open.spotify.com/user/brianbehrens">
                            music
                        </a>
                        /
                        <a href="https://www.imdb.com/user/ur37273093/">film</a>{' '}
                        fanatic. I enjoy taking{' '}
                        <a href="https://gallery.brainbrian.com">photos</a> and
                        making{' '}
                        <a href="https://www.youtube.com/brianbehrens">films</a>{' '}
                        every now and again.
                    </p>
                </article>
            </Panel>
            <ProjectsRecent />
        </main>
        <Footer />
    </>
);

export default IndexPage;
