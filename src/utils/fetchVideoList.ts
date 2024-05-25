import supabase from './supabaseClient';
import {fetchVideoObject} from '../Video/types';

export async function latestAllVideoList(): Promise<fetchVideoObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type(name), used(character(name))')
      .order('id', {ascending: false});
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching video list', error);
    return null;
  }
}

export async function oldestAllVideoList(): Promise<fetchVideoObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type(name), used(character(name))')
      .order('id', {ascending: true});
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching video list', error);
    return null;
  }
}
