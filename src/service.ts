import { HolodexApiClient, VideoStatus } from 'holodex.js';

const client = new HolodexApiClient({
  // apiKey: import.meta.env.REACT_APP_API_KEY as string,
  apiKey: "c114cf32-0b48-4f54-baf1-108d232276e3"
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