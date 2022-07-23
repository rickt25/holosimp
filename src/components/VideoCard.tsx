import React, { useEffect, useState } from "react";
import moment from "moment";
import { Video } from "holodex.js";
import { getTimeDifference } from "../utils";

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  // const duration = moment.duration();
  const [time, setTime] = useState<Date>(getTimeDifference(video.actualStart));

  useEffect(() => {
    if (video.status === "upcoming" || !video.actualStart) {
      return;
    }
    let interval = setInterval(() => {
      setTime((prevState) => new Date(prevState.getTime() + 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-1/4 p-4 transition rounded hover:bg-white hover:text-black">
        <a href={`https://youtu.be/${video.videoId}`} target="_blank">
          <div className="relative">
            <img
              src={`https://i.ytimg.com/vi/${video.videoId}/hq720.jpg`}
              alt=""
              className="mb-2 rounded"
            />
            <div className="absolute right-1 bottom-1 text-sm bg-black text-white px-1 opacity-80 rounded">
              {video.actualStart ? moment(time).format("HH:mm:ss") : "UPCOMING"}
            </div>
          </div>
          <p>{video.title}</p>
        </a>
      </div>
    </>
  );
};
