import React from 'react';
import {
  HStack,
  IconButton,
  Button,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { FaPlay, FaRedo, FaSun, FaMoon } from 'react-icons/fa';

const Toolbar = ({ onRunQuery, onReset }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={4} p={4} justifyContent="flex-start" alignItems="center">
      <Tooltip label="Run Query" aria-label="A tooltip">
        <IconButton
          icon={<FaPlay />}
          onClick={onRunQuery}
          aria-label="Run Query"
          colorScheme="teal"
        />
      </Tooltip>
      <Tooltip label="Reset Filters" aria-label="A tooltip">
        <IconButton
          icon={<FaRedo />}
          onClick={onReset}
          aria-label="Reset Filters"
          colorScheme="orange"
        />
      </Tooltip>
      <Tooltip label="Toggle Color Mode" aria-label="A tooltip">
        <IconButton
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          aria-label="Toggle Color Mode"
          colorScheme="blue"
        />
      </Tooltip>
      {/* You can add more toolbar actions here */}
    </HStack>
  );
};

export default Toolbar;
