import React from 'react';
import { Link } from 'gatsby';

import * as Styles from './PostLink.module.scss';

export const PostLink = ({ post }) => (
    <article className="limit-text-width">
        <Link to={post.fields.slug} className={Styles.PostLink}>
            {post.frontmatter.title}
        </Link>
        <p className={Styles.PostLinkDate}>{post.frontmatter.date}</p>
        <p>{post.excerpt}</p>
    </article>
);
