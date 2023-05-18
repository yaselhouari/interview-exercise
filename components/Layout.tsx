import React from 'react';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const variant = useBreakpointValue({ base: "fluid", md: "fixed" });

  return (
    <Box minHeight="100vh" bg="gray.100">
      <Navbar />
      <Container maxW={variant} pt={12}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
