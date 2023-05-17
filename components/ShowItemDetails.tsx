import React from 'react';
import { Box, Image, Text, Link } from "@chakra-ui/react";

const ShowItemDetails = ({ item, loading }) => {
  if(loading) {
    return 'Loading...';
  }
  return (
    <Box border="1px" borderColor="gray.200" p="5" borderRadius="md" data-testid="show-item-details">
      <Image src={item?.cover_url} alt={item.title} mb="5" />
      <Text fontSize="xl" fontWeight="bold" mb="2">{item.title}</Text>
      <Text mb="2">Release date: {item.release_date}</Text>
      {item.type === "movie" ? (
        <>
          <Text mb="2">Box office: ${item.box_office}</Text>
          <Text mb="2">Duration: {item.duration} min</Text>
          <Text mb="2">Directed by: {item.directed_by}</Text>
        </>
      ) : (
        <>
          <Text mb="2">Last aired date: {item.last_aired_date}</Text>
          <Text mb="2">Season: {item.season}</Text>
          <Text mb="2">Number of episodes: {item.number_episodes}</Text>
          <Text mb="2">Directed by: {item.directed_by}</Text>
        </>
      )}
      <Text mb="2">Overview: {item.overview}</Text>
      <Link href={`https://www.imdb.com/title/${item.imdb_id}`} isExternal>View on IMDB</Link>
    </Box>
  );
};

export default ShowItemDetails;
