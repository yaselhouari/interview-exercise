import React from 'react';
import { Select } from "@chakra-ui/react";

const Filter = ({handleFilterChange, selectedFilter}) => {
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

export default Filter;