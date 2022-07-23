import { Video } from "holodex.js";
import { useEffect, useState } from "react";
import { VideoWrapper } from "./components/VideoWrapper";
import { getLiveVideos } from "./service";

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      const videos = await getLiveVideos();
      setVideos(videos);
      console.log(videos.filter(x => x.status == "upcoming"));
    })();
  }, []);

  return (
    <main className="box-border">
      <div className="p-10">
        <VideoWrapper title="Live Now" videos={videos.filter(x => x.status == "live")} />
        <VideoWrapper title="Upcoming" videos={videos.filter(x => x.status == "upcoming")} />
      </div>
    </main>
  );
}

export default App;
