import * as React from 'react';
import { Helmet } from 'react-helmet';

export const Head = ({ children, description, image, title }) => (
    <Helmet>
        <meta charset="UTF-8" />
        <title>
            {title
                ? title
                : 'Brian Behrens | software engineer living in Los Angeles, California.'}
        </title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta
            name="copyright"
            content="Copyright (c) 2020 Brian Behrens. All Rights Reserved."
        />
        <meta
            name="author"
            content="Brian Behrens, https://www.brainbrian.com"
        />
        <meta
            name="description"
            content={
                description
                    ? description
                    : 'This is the personal portfolio of Brian Behrens. This site serves as a representaton of his professional and personal work since 2002 as an interactive developer and software engineer.'
            }
        />
        <meta
            name="google-site-verification"
            content="TDkdpgdElFiFg58-ZaeS32jhIdYh2uvnH0DfZMVPKyo"
        />
        <meta
            property="og:image"
            content={image ? image : '/images/share.jpg'}
        />
        {children}
    </Helmet>
);
