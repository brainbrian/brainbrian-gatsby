import * as React from 'react';

import { Link } from 'gatsby';

import Styles from './Pagination.module.scss';

export const Pagination = ({ currentPage, numPages }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
        currentPage - 1 === 1 ? '/' : `/posts/${(currentPage - 1).toString()}/`;
    const nextPage = `/posts/${(currentPage + 1).toString()}/`;

    return (
        <nav className={Styles.Pagination}>
            {!isFirst && (
                <Link
                    to={prevPage}
                    rel="prev"
                    className={Styles.PaginationLink}
                    activeClassName={Styles.PaginationLinkActive}
                >
                    ← <span className="sr-only">Previous Page</span>
                </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
                <Link
                    key={`pagination-number${i + 1}`}
                    to={`/posts/${i === 0 ? '' : i + 1 + '/'}`}
                    className={Styles.PaginationLink}
                    activeClassName={Styles.PaginationLinkActive}
                >
                    {i + 1}
                </Link>
            ))}
            {!isLast && (
                <Link
                    to={nextPage}
                    rel="next"
                    className={Styles.PaginationLink}
                    activeClassName={Styles.PaginationLinkActive}
                >
                    <span className="sr-only">Next Page</span> →
                </Link>
            )}
        </nav>
    );
};
