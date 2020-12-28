import * as React from 'react';

import Styles from './Project.module.scss';

export const Project = ({ node }) => {
    const { frontmatter, html } = node;

    return (
        <article className={Styles.Project}>
            <a href={frontmatter.url} className={Styles.Link}>
                <h2>{frontmatter.title}</h2>
                {frontmatter.image && (
                    <img
                        src={frontmatter.image.publicURL}
                        alt={`${frontmatter.title} Sample`}
                    />
                )}
            </a>
            <div
                className={Styles.Content}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </article>
    );
};
