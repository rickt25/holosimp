import { Video } from "holodex.js";
import { useEffect, useState } from "react";
import { VideoCard } from "./components/VideoCard";
import { getLiveVideos } from "./service";

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      const videos = await getLiveVideos();
      setVideos(videos);
      console.log(videos);
    })();
  }, []);

  return (
    <main className="box-border">
      <div className="flex flex-wrap p-10">
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </main>
  );
}

export default App;
