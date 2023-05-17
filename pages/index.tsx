import React, { useEffect, useState } from 'react';
import { Select, Text } from "@chakra-ui/react";
import { useMarvelShowsQuery } from '../api/api';
import ShowList from '../components/ShowList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [shows, setShows] = useState()
  const handleFilterChange = (event) => {
    event.target.value === 'all'? setFilter('all') :
    setFilter(event.target.value);
  };
  const {isLoading, data, error} = useMarvelShowsQuery(filter);
  useEffect(() => {
    if(data) {
      setShows(data);
      setLoading(false);
    }
  }, [isLoading, data, error])
  if(loading) {

  return <Text>Loading...</Text>;
  }
  else return <div>
    <Filter handleFilterChange={handleFilterChange} selectedFilter={filter} />
    <ShowList shows={shows} /></div>
};
export const Filter = ({handleFilterChange, selectedFilter}) => {
  return (
    <Select 
      data-testid="filter-select" 
      onChange={handleFilterChange} 
      bg="white"
      color="black"
      borderColor="gray.300"
      borderRadius="md"
      width="200px"
      marginBottom="1em">
      <option value="all" selected={selectedFilter === 'all'? true: false}>All</option>
      <option value="movie" selected={selectedFilter === 'movie'? true: false}>Movie</option>
      <option value="tvShow" selected={selectedFilter === 'tvShow'? true: false}>TV Show</option>
    </Select>
  )
} 
export default Home;

