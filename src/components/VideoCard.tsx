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
      console.log("interval called");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-1/4 p-4">
        <a href={`https://youtu.be/${video.videoId}`} target="_blank">
          <div className="relative">
            <img
              src={`https://i.ytimg.com/vi/${video.videoId}/hq720.jpg`}
              alt=""
            />
            {video.actualStart && (
              <div className="absolute right-1 bottom-1 text-xs bg-white p-1">
                {moment(time).format("HH:mm:ss")}
              </div>
            )}
          </div>
          <p>{video.title}</p>
        </a>
      </div>
    </>
  );
};
