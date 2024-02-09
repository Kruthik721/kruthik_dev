import React from 'react';
import { Box, Flex, useColorModeValue, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

const SidebarContent = (props) => (
    <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...props}
    >
        {/* Sidebar content goes here, you can add navigation links or tools */}
    </Box>
);

const DashboardLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.800')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* Main content area */}
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout;
