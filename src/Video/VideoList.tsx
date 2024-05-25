import React from 'react';
import VideoItem from './VideoItem';
import {VideoObject} from './types';

interface VideoListProps {
  videos: VideoObject[];
}

const VideoList: React.FC<VideoListProps> = ({videos}) => {
  return (
    <div>
      {videos.map((video) => <VideoItem video={video} key={video.id} />)}
    </div>
  );
};

export default VideoList;
