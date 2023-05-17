import React, { useEffect, useState } from 'react';
import { Select, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useMarvelShowQuery, useMarvelShowsQuery } from '@/api/api';
import ShowList from '@/components/ShowList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState()
  const [filter, setFilter] = useState();
  const handleFilterChange = (event) => {
    event.target.value === 'all'? setFilter(undefined) :
    setFilter(event.target.value);
    setLoading(true);
    setShows(undefined);
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
    <Select 
      data-testid="filter-select" 
      onChange={handleFilterChange} 
      bg="white"
      color="black"
      borderColor="gray.300"
      borderRadius="md"
      width="200px"
      marginBottom="1em">
      <option value="all">All</option>
      <option value="movie">Movie</option>
      <option value="tvShow">TV Show</option>
    </Select>
    <ShowList shows={shows} /></div>
};

export default Home;

