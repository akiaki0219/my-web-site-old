import supabase from './supabaseClient';
import {VideoObject} from '../types';

async function fetchVideoList(): Promise<VideoObject[] | null> {
  try {
    const {data, error} = await supabase.from('video').select('*');
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    console.log("Fetched Video list:", data)
    return data;
  } catch (error) {
    console.error('Error fetching video list', error);
    return null;
  }
}

export default fetchVideoList;
