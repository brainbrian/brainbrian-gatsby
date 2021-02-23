import * as React from 'react';

import Styles from './Panel.module.scss';

export const Panel = ({ children, videoUrl }) => (
    <section className={Styles.Panel}>
        {children}
        {videoUrl && (
            <video autoPlay loop playsInline muted className={Styles.Video}>
                <source src={videoUrl} type="video/mp4" />
            </video>
        )}
    </section>
);
