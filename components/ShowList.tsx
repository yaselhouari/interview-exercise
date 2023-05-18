import React from 'react';
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ShowItem from "./ShowItem";
import { Spinner, Flex } from "@chakra-ui/react";

const ShowList = ({ shows, loading }) => {
  if(loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="red.200" />
      </Flex>
    );
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
