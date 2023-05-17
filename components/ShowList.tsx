import React, { useState } from 'react';
import { Grid, GridItem, Select } from "@chakra-ui/react";
import ShowItem from "./ShowItem";

const ShowList = ({ shows }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {shows.map((show) => (
        <GridItem key={show.id}>
          <ShowItem show={show}/>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ShowList;
