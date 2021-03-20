import { last, split } from 'lodash';
import YouTubeVideo from 'react-youtube';

const Video = ({ url }) => {
  const query = last(split(url, '?'));
  const videoId = new URLSearchParams(query).get('v');

  return (
    <YouTubeVideo
      videoId={videoId}
      opts={{ width: '100%' }}
    />
  );
};

export default Video;
