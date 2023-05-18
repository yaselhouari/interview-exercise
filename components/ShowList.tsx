import React from 'react';
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ShowItem from "./ShowItem";
import Loader from './Loader';

const ShowList = ({ shows, loading }) => {
  if(loading) {
    return <Loader />
  }
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} alignItems="stretch">
      {shows.map((show) => (
        <GridItem key={show.id}>
          <ShowItem show={show}/>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ShowList;
