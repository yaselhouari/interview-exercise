import React, { useState } from 'react';
import { Grid, GridItem, Select } from "@chakra-ui/react";
import ShowItem from "./ShowItem";

const ShowList = ({ shows }) => {
  const [filter, setFilter] = useState('all');
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredShows = shows.filter(show => filter === 'all' ? true : show.type === filter);

  return (
    <div>
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
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {filteredShows.map((show) => (
          <GridItem key={show.id}>
            <ShowItem show={show} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default ShowList;
