import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';

const ShowItem = ({ show }) => {
  return (
    <Link href={`/show/${show.id}`}>
        <Box data-testid={'show-item'} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={show.cover_url} alt={show.title} />

          <Box p="6">
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {show.title}
            </Box>

            <Text mt={2} color="gray.500">
              {show.overview}
            </Text>

            <a href={`https://www.imdb.com/title/${show.imdb_id}`} target="_blank" rel="noopener noreferrer">
              View on IMDB
            </a>
          </Box>
        </Box>
    </Link>
  );
};

export default ShowItem;
