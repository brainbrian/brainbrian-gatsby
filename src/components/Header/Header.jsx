import * as React from 'react';

import { Link } from 'gatsby';

import Styles from './Header.module.scss';

export const Header = () => (
    <header className={Styles.Header}>
        <div className={Styles.HeaderContainer}>
            <a className={Styles.Logo} href="/">
                Brain Brian
            </a>
            <p className={Styles.Tagline}>
                software engineer living in Los Angeles, California.
            </p>
            <nav className={Styles.Nav}>
                <ul className={Styles.NavList}>
                    <li className={Styles.NavListItem}>
                        <Link
                            to="/projects/"
                            className={Styles.NavLink}
                            activeClassName={Styles.NavLinkActive}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={Styles.NavListItem}>
                        <Link
                            to="/resume/"
                            className={Styles.NavLink}
                            activeClassName={Styles.NavLinkActive}
                        >
                            Resume
                        </Link>
                    </li>
                    <li className={Styles.NavListItem}>
                        <Link
                            to="/posts/"
                            className={Styles.NavLink}
                            activeClassName={Styles.NavLinkActive}
                        >
                            Posts
                        </Link>
                    </li>
                    <li className={Styles.NavListItem}>
                        <Link
                            to="/videos/"
                            className={Styles.NavLink}
                            activeClassName={Styles.NavLinkActive}
                        >
                            Videos
                        </Link>
                    </li>
                    <li className={Styles.NavListItem}>
                        <a
                            href="https://gallery.brainbrian.com"
                            className={Styles.NavLink}
                        >
                            Gallery
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
