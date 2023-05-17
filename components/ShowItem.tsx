import React from 'react';
import { Box, Image, Text, Link } from "@chakra-ui/react";

const ShowItem = ({ show }) => {
  return (
    <Box data-testid={'show-item'} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={show.cover_url} alt={show.title} />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {show.title}
        </Box>

        <Text mt={2} color="gray.500">
          {show.overview}
        </Text>

        <Link color="teal.500" href={`https://www.imdb.com/title/${show.imdb_id}`} isExternal>
          View on IMDB
        </Link>
      </Box>
    </Box>
  );
};

export default ShowItem;
