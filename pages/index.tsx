import React from 'react';
import { Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useMarvelShowQuery, useMarvelShowsQuery } from '@/api/api';

const Home = () => {
  const result = useMarvelShowQuery(1);
  console.log('result: ', result);
  return <Text>Edit /pages/index.tsx file</Text>;
};

export default Home;
function getMarvelShows() {
  throw new Error('Function not implemented.');
}

