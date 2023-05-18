import React from 'react';
import { Spinner, Flex } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" color="red.200" />
        </Flex>
    );
}

export default Loader;