import { HolodexApiClient, VideoStatus } from 'holodex.js';

const client = new HolodexApiClient({
  apiKey: import.meta.env.VITE_HOLODEX_API_KEY as string,
});

export const getLiveVideos = async () => {
  try{
    const videos = await client.getLiveVideos({ 
      org: 'Hololive',
    });
    return videos;
  }catch(err){
    throw new Error(err as string);
  }
}