import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie, TvShow } from '../data';

const getMarvelShows = async (): Promise<(Movie | TvShow)[]> => {
  const { data } = await axios.get('/api/marvel/shows');
  return data;
};

export const useMarvelShowsQuery = () => {
  return useQuery('marvelShows', getMarvelShows);
};

const getMarvelShow = async (id: number): Promise<Movie | TvShow> => {
    const { data } = await axios.get(`/api/marvel/shows/${id}`);
    return data;
  };
  
export const useMarvelShowQuery = (id: number) => {
  return useQuery(['marvelShow', id], () => getMarvelShow(id));
};
