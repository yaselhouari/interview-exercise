import React, { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useMarvelShowQuery, useMarvelShowsQuery } from '@/api/api';
import ShowList from '@/components/ShowList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState()
  const {isLoading, data, error} = useMarvelShowsQuery();
  useEffect(() => {
    if(data) {
      setShows(data);
      setLoading(false);
    }
  }, [isLoading, data, error])
  if(loading) {

  return <Text>Loading...</Text>;
  }
  else return <ShowList shows={shows} />
};

export default Home;

