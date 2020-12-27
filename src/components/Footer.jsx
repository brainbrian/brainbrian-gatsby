import * as React from 'react';

const footerStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

export const Footer = () => (
    <>
        <h3>From The Brain</h3>
        <ul>
            <li>So we moved to Los Angeles</li>
            <li>Learning to Walk the Nose on my Longboard</li>
            <li>Surfing Westport, WA on a clean winter day</li>
            <li>Testing out</li>
        </ul>
        <h3>Tweets</h3>
        <ul>
            <li>Tweet 1 text shows up here</li>
            <li>Tweet 1 text shows up here</li>
            <li>Tweet 1 text shows up here</li>
            <li>Tweet 1 text shows up here</li>
        </ul>
        <footer styles={footerStyles}>
            © 2020 Brain Brian (Brian Behrens)
        </footer>
    </>
);
