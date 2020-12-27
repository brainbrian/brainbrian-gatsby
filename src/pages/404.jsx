import * as React from 'react';

import { Link } from 'gatsby';

import { Footer, Head, Header } from '../components';

const NotFoundPage = () => (
    <>
        <Head title="Page Not Found | brainbrian.com" />
        <Header />
        <main>
            <h1>Page not found</h1>
            <span role="img" aria-label="Pensive emoji">
                😔
            </span>
            {process.env.NODE_ENV === 'development' ? (
                <>
                    <br />
                    Try creating a page in <code>src/pages/</code>.
                    <br />
                </>
            ) : null}
            <Link to="/">Go home</Link>.
        </main>
        <Footer />
    </>
);

export default NotFoundPage;
