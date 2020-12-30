import React from 'react';
import { Link } from 'gatsby';

import Styles from './PostLink.module.scss';

export const PostLink = ({ post }) => (
    <div>
        <Link to={post.fields.slug} className={Styles.PostLink}>
            {post.frontmatter.title}
        </Link>
        <p>{post.frontmatter.date}</p>
        <p>{post.excerpt}</p>
    </div>
);
