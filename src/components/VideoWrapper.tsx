import { Video } from "holodex.js";
import { VideoCard } from "./VideoCard";

interface VideoWrapperProps {
  title: string,
  videos: Video[];
}

export const VideoWrapper: React.FC<VideoWrapperProps> = ({ title, videos }) => {
  return (
    <>
      <div>
        <h1 className="px-4 pb-4 text-4xl font-bold uppercase">{title}</h1>
        <hr className="mx-4 mb-5 opacity-70" />
        <div className="flex flex-wrap">
          {videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  )
}