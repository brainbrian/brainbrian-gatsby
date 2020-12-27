import * as React from 'react';

import Styles from './Panel.module.scss';

export const Panel = ({ children, videoUrl }) => (
    <section className={Styles.Panel}>
        {children}
        {videoUrl && (
            <div className={Styles.Video}>
                <video loop playsInline autoPlay>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
        )}
    </section>
);
