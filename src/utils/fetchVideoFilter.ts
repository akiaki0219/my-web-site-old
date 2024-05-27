import supabase from './supabaseClient';
import {VideoType, Character, Engine} from '../Video/types';

export async function fetchVideoTypeArray(): Promise<VideoType[] | null> {
  try {
    const {data, error} = await supabase
      .from('type')
      .select('id, name')
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

export async function fetchCharacterArray(): Promise<Character[] | null> {
  try {
    const {data, error} = await supabase
      .from('character')
      .select('id, name')
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

export async function fetchEngineArray(): Promise<Engine[] | null> {
  try {
    const {data, error} = await supabase
      .from('engine')
      .select('id, name')
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
