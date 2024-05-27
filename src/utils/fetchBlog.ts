import supabase from './supabaseClient';
import {fetchBlogObject, LatestBlogObject} from '../Blog/types';

export async function fetchLatestBlog(): Promise<LatestBlogObject | null> {
  try {
    const {data, error} = await supabase
      .from('blog')
      .select('id, title, created_at, tag(name)')
      .order('id', {ascending: false});
    if (error) {
      console.error('Error fetching blog list', error);
      return null;
    }
    const latestBlog = data[0];
    return latestBlog;
  } catch (error) {
    console.error('Error fetching blog list', error);
    return null;
  }
}

export async function fetchLatestAllBlogList(): Promise<fetchBlogObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('blog')
      .select('id, title, created_at, tag(name), content(index, body, head)')
      .order('id', {ascending: false});
    if (error) {
      console.error('Error fetching blog list', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching blog list', error);
    return null;
  }
}

export async function fetchOldestAllBlogList(): Promise<fetchBlogObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('blog')
      .select('id, title, created_at, tag(name), content(index, body, head)')
      .order('id', {ascending: false});
    if (error) {
      console.error('Error fetching blog list', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching blog list', error);
    return null;
  }
}
