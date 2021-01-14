import * as React from 'react';

import { Loader } from '../';

import Styles from './VideoList.module.scss';

export const VideoList = ({ videos }) => {
    if (videos.length < 1) {
        return <Loader />;
    }
    return (
        <>
            <ul className={Styles.VideoList}>
                {videos.map((video) => (
                    <li key={video.id} className={Styles.VideoListItem}>
                        <a href={video.url}>
                            <div className={Styles.VideoListImage}>
                                <img
                                    src={video.image}
                                    alt={`Thumbnail of video ${video.id}`}
                                />
                            </div>
                            <h2>{video.title}</h2>
                        </a>
                    </li>
                ))}
            </ul>
            <p className={Styles.VideoListLink}>
                <a href="https://www.youtube.com/c/BrianBehrens/videos">
                    More on youtube.com
                </a>
            </p>
        </>
    );
};
