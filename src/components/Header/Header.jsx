import * as React from 'react';

import { Link } from 'gatsby';

import Styles from './Header.module.scss';

export const Header = () => (
    <header className={Styles.Header}>
        <p className={Styles.Logo}>Brain Brian</p>
        <p className={Styles.Tagline}>
            software engineer living in Los Angeles, California.
        </p>
        <nav className={Styles.Nav}>
            <ul className={Styles.NavList}>
                <li className={Styles.NavListItem}>
                    <Link to="/projects" activeClassName={Styles.NavLinkActive}>
                        Projects
                    </Link>
                </li>
                <li className={Styles.NavListItem}>
                    <Link to="/resume" activeClassName={Styles.NavLinkActive}>
                        Resume
                    </Link>
                </li>
                <li className={Styles.NavListItem}>
                    <Link to="/blog" activeClassName={Styles.NavLinkActive}>
                        Blog
                    </Link>
                </li>
                <li className={Styles.NavListItem}>
                    <Link to="/videos" activeClassName={Styles.NavLinkActive}>
                        Videos
                    </Link>
                </li>
                <li className={Styles.NavListItem}>
                    <Link to="https://gallery.brainbrian.com">Gallery</Link>
                </li>
            </ul>
        </nav>
    </header>
);
