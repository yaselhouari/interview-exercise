import { useQuery } from 'react-query';

const getMarvelShows = async () => {
    try {
    const res = await fetch("/api/marvel");
    return res.json()
    } catch(e) {
      return e;
    }
};

export const useMarvelShowsQuery = () => {
  return useQuery('marvelShows', getMarvelShows);
};

const getMarvelShow = async (id: number) => {
  try {
    const res = await fetch(`/api/marvel/${id}`);
    return res.json();
  } catch (e) {
    return { error: 'Failed to fetch Marvel show' };
  }
};
  
export const useMarvelShowQuery = (id: number) => {
  return useQuery(['marvelShow', id], () => getMarvelShow(id));
};
