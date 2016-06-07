import React, { PropTypes } from 'react';
/*>>>>>>=============================================<<<<<<*/

import Video from './Video';
/*>>>>>>=============================================<<<<<<*/

const { array } = PropTypes;

const VideosList = ({ videos }) => (
    <div>
        <h1><b>{videos[ 0 ].channel.display_name}</b> Channel</h1>
        {videos.map((video) => {
            return (
                <div key={video._id}>
                    <Video {...video} />
                </div>
            );
        })}
    </div>
);

VideosList.propTypes = {
    videos: array.isRequired
};

export default VideosList;
