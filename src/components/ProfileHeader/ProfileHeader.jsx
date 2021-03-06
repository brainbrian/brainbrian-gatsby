import * as React from 'react';

import * as Styles from './ProfileHeader.module.scss';

export const ProfileHeader = ({ children }) => (
    <section className={Styles.ProfileHeader}>
        <div className={Styles.Biography}>{children}</div>
        <aside className={Styles.Aside}>
            <div className={Styles.ProfileImage} tabIndex={0}>
                <img
                    src="/images/brian-behrens-profile.webp"
                    alt="Portrait of Brian Behrens"
                />
            </div>
            <p>
                <a
                    className="github-button"
                    href="https://github.com/brainbrian"
                    data-color-scheme="no-preference: light; light: light; dark: light;"
                    data-size="large"
                    aria-label="Follow @brainbrian on GitHub"
                >
                    Follow @brainbrian
                </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/brianbehrens">
                    <img
                        loading="lazy"
                        src="https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x25.png"
                        alt="View Brian Behrens's profile on LinkedIn"
                        width="160"
                        height="25"
                        border="0"
                    />
                </a>
            </p>
        </aside>
    </section>
);
