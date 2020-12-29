import * as React from 'react';

import Styles from './Project.module.scss';

export const Project = ({ id, html, imageUrl, title, url }) => (
    <article className={Styles.Project} id={id}>
        <a href={url} className={Styles.Link}>
            <h2>{title}</h2>
            {imageUrl && <img src={imageUrl} alt={`${title} Sample`} />}
        </a>
        <div
            className={Styles.Content}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </article>
);
