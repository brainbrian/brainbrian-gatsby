import * as React from 'react';

import Styles from './Project.module.scss';

export const Project = ({ id, excerpt, imageUrl, slug, title }) => (
    <article className={Styles.Project} id={id}>
        <a href={slug} className={Styles.Link}>
            <h2>{title}</h2>
            {imageUrl && <img src={imageUrl} alt={`${title} Sample`} />}
        </a>
        <div
            className={Styles.Content}
            dangerouslySetInnerHTML={{ __html: excerpt }}
        />
    </article>
);
