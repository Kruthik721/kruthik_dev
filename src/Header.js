import React from 'react';
import { Box, Flex, Text, Button, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg="teal.500"
            color="white"
            borderBottomWidth="2px"
            borderBottomColor="teal.600"
        >
            <Flex align="center" mr={5}>
                <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
                    Playground
                </Text>
            </Flex>

            <Box display="flex" alignItems="center" justifyContent="space-between" width="auto">
                {/* Navigation Links */}
                <Link to="/dashboard">
                    <Button variant="ghost" aria-label="Dashboard" my={5} w="100%" _hover={{ bg: "teal.600" }}>
                        Dashboard
                    </Button>
                </Link>
                <Link to="/docs">
                    <Button as="a" variant="ghost" aria-label="Docs" my={5} mx={2} w="100%" _hover={{ bg: "teal.600" }}>
                        Docs
                    </Button>
                </Link>

                {/* Theme Toggle Button */}
                <IconButton
                    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    aria-label="Toggle Theme"
                    _hover={{ bg: "teal.600" }}
                />
            </Box>
        </Flex>
    );
};

export default Header;
