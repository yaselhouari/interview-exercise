import React from 'react';
import { Box, Flex, Text, useBreakpointValue, Link } from '@chakra-ui/react';

const Navbar = () => {
  const fontSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box bg="black" p={4}>
      <Flex justify="space-between" align="center">
          <Link href="/">
            <Text fontSize={fontSize} fontWeight="bold" color="red.500">
              Home
            </Text>
          </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
