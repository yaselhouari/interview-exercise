import React from 'react';
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ShowItem from "./ShowItem";
import Loader from './Loader';
import { Show } from '@/types/types';

type ShowListProps = {
  shows: Show[],
  loading: boolean
}
const ShowList = ({ shows, loading }: ShowListProps) => {
  if(loading) {
    return <Loader />
  }
  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} gap={6} alignItems="stretch">
      {shows.map((show) => (
        <GridItem key={show.id}>
          <ShowItem show={show}/>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ShowList;
