import { useQuery } from 'react-query';

const getMarvelShows = async (type) => {
  try {
      const url = type ? `/api/marvel?type=${type}` : '/api/marvel';
      const res = await fetch(url);
      return res.json();
  } catch(e) {
    return e;
  }
};

export const useMarvelShowsQuery = (type) => {
return useQuery(['marvelShows', type], () => getMarvelShows(type));
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
