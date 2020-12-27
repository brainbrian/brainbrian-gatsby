import * as React from 'react';

import { Footer, Head, Header } from '../components';

import './Styles.scss';

const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const Index = () => (
    <>
        <Head />
        <Header />
        <main style={pageStyles}>
            <h1>Hello, I'm Brian Behrens.</h1>
            <h2>I'm a software engineer.</h2>
            <p>
                I live,{' '}
                <a href="http://www.linkedin.com/in/brianbehrens">work</a> and{' '}
                <a href="https://github.com/brainbrian">code</a> in Venice. I’m
                a&nbsp;
                <a href="https://www.youtube.com/watch?v=JPOGfMQzMVY">surfer</a>
                ,{' '}
                <a href="https://www.youtube.com/watch?v=7HHHjXwJxwk">
                    snowboarder
                </a>
                ,&nbsp;
                <a href="http://www.twitter.com/brianbehrens">twitterer</a>
                ,&nbsp;
                <a href="http://www.strava.com/athletes/brianbehrens">
                    cyclist
                </a>{' '}
                and a{' '}
                <a href="http://open.spotify.com/user/brianbehrens">music</a>/
                <a href="http://www.imdb.com/user/ur37273093/">film</a> fanatic.
                I enjoy taking{' '}
                <a href="https://gallery.brainbrian.com">photos</a> and making{' '}
                <a href="http://www.youtube.com/brianbehrens">films</a> every
                now and again. I find comfort in{' '}
                <a href="http://tumblr.brainbrian.com">random things</a>.
            </p>
        </main>
        <Footer />
    </>
);

export default Index;
