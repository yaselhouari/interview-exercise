import React, { useState } from 'react';
import { Box, Image, Text, Link, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Show } from '@/types/types';

type ShowItemProps = {
  show: Show
}

const ShowItem = ({ show }: ShowItemProps) => {
  const [imgSrc, setImgSrc] = useState(show.cover_url);
  const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';

  const handleError = () => {
    setImgSrc(defaultImage);
  };

  return (
    <Link href={`/show/${show.id}`} passHref>
      <Box as="article" maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" style={{ textDecoration: 'none' }}>
        {show.cover_url && (
          <Image src={imgSrc} alt={show.title} onError={handleError} height="400" objectFit="cover" />
        )}
        <Box p="6" bgColor="blackAlpha.800" data-testid="show-item">
          <Box
            mt={1}
            fontWeight="semibold"
            fontSize="lg"
            lineHeight="tight"
            color="white"
            css={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              height: 30,
            }}
          >
            {show.title}
          </Box>
          <Text
            mt={2}
            color="whiteAlpha.700"
            css={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {show.overview}
          </Text>
          <Box mt={2}>
            <Link href={`https://www.imdb.com/title/${show.imdb_id}`} color="red.400" isExternal mt="5">
              <Icon as={ExternalLinkIcon} mr="2px" />
              View on IMDB
            </Link>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ShowItem;
