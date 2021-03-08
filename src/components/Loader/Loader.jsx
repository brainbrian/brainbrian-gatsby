import * as React from 'react';

import * as Styles from './Loader.module.scss';

export const Loader = () => (
    <div className={Styles.Loader}>
        <div className={Styles.LoaderImage}>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);
