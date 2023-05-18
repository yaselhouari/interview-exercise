import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Link, VStack, Stack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Loader from './Loader';

const ShowItemDetails = ({ item = {}, loading }) => {
  const [imgSrc, setImgSrc] = useState(item.cover_url || '');
  const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';

  useEffect(() => {
    setImgSrc(item.cover_url || defaultImage);
  }, [item.cover_url]);
  
  const handleError = () => {
    setImgSrc(defaultImage);
  };

  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  if(loading) {
    return <Loader />
  }

  return (
    <Box border="1px" borderColor="gray.200" p="5" borderRadius="md" bg="blackAlpha.900" color="white" data-testid="show-item-details">
      <Stack direction={stackDirection} spacing="24px">
        <Image src={imgSrc} alt={item.title} mb="5" boxSize={["100%", "300px"]} objectFit="cover" borderRadius="md" onError={handleError}/>
        <VStack align="start" spacing="24px">
          <Text fontSize="2xl" fontWeight="bold">{item.title}</Text>
          <Text>Release date: {item.release_date}</Text>
          {item.type === "movie" ? (
            <>
              <Text>Box office: ${item.box_office}</Text>
              <Text>Duration: {item.duration} min</Text>
              <Text>Directed by: {item.directed_by}</Text>
            </>
          ) : (
            <>
              <Text>Last aired date: {item.last_aired_date}</Text>
              <Text>Season: {item.season}</Text>
              <Text>Number of episodes: {item.number_episodes}</Text>
              <Text>Directed by: {item.directed_by}</Text>
            </>
          )}
        </VStack>
      </Stack>
      <Text mt="5" fontSize="lg">{item.overview}</Text>
      <Link href={`https://www.imdb.com/title/${item.imdb_id}`} color="red.400" isExternal mt="5">
            <Icon as={ExternalLinkIcon} mr="2px" />
            View on IMDB
      </Link>
    </Box>
  );
};

export default ShowItemDetails;
