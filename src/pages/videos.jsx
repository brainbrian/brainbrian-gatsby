/* eslint-disable no-undef */
import * as React from 'react';

import { Footer, Head, Header, VideoList } from '../components';

const VideosPage = () => {
    const [videos, setVideos] = React.useState([]);

    if (typeof window !== `undefined`) {
        window.onGoogleLoad = () => {
            gapi.client.setApiKey('AIzaSyAjRARdBxX16wTA5VGu2bgySbu5WYltopQ');
            gapi.client.load('youtube', 'v3', () => {
                gapi.client
                    .request({
                        path:
                            'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=UUnphFlefYslPtGlsRuRp5Kw',
                    })
                    .then((response) =>
                        setVideos(
                            response.result.items.map((video) => ({
                                id: video.snippet.resourceId.videoId,
                                date: video.snippet.publishedAt,
                                image: video.snippet.thumbnails.maxres
                                    ? video.snippet.thumbnails.maxres.url
                                    : video.snippet.thumbnails.high.url,
                                title: video.snippet.title,
                                url: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
                            })),
                        ),
                    );
            });
        };
    }

    return (
        <>
            <Head>
                <script
                    type="text/javascript"
                    src="https://apis.google.com/js/client.js?onload=onGoogleLoad"
                ></script>
            </Head>
            <Header />
            <main className="content">
                <VideoList videos={videos} />
            </main>
            <Footer />
        </>
    );
};

export default VideosPage;
