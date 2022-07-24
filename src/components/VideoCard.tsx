import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { Video } from 'holodex.js';
import { formatNumber, getTimeDifference } from '../utils';

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  // const duration = moment.duration();
  const [time, setTime] = useState<Date>(getTimeDifference(video.actualStart));
  const IS_UPCOMING = video.status === 'upcoming';

  useEffect(() => {
    if (IS_UPCOMING || !video.actualStart) {
      return;
    }
    let interval = setInterval(() => {
      setTime(prevState => new Date(prevState.getTime() + 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const VIDEO_STATUS = useMemo(() => {
    return video.actualStart
      ? moment(time).format('HH:mm:ss')
      : IS_UPCOMING
      ? 'UPCOMING'
      : 'WAITING';
  }, [time]);

  return (
    <>
      <div className="w-1/4 p-4 transition rounded hover:bg-white hover:text-black">
        <a href={`https://youtu.be/${video.videoId}`} target="_blank">
          <div className="relative">
            <img
              src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
              alt=""
              className="mb-2 rounded"
            />
            <div className="absolute right-1 bottom-1 text-sm bg-black text-white px-1 opacity-80 rounded">
              {VIDEO_STATUS}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/6 mr-2">
              <img
                src={video.channel.avatarUrl}
                alt={video.channel.name}
                className="rounded-full"
              />
            </div>
            <div className="w-5/6">
              <p className="line-clamp-2 font-semibold">{video.title}</p>
              <span className="block text-sm">{video.channel.englishName}</span>
              <span className="block text-sm">
                {!IS_UPCOMING
                  ? video.topic === 'membersonly' ||
                    (video.liveViewers <= 0 && VIDEO_STATUS !== 'WAITING')
                    ? 'Members only stream'
                    : VIDEO_STATUS === 'WAITING'
                    ? 'Waiting for stream to start'
                    : `${formatNumber(video.liveViewers)} Watching`
                  : `Starts ${moment(video.scheduledStart).fromNow()}`}
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
