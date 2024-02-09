import React, { useState } from 'react';
import { ChakraProvider, Box, extendTheme, VStack, Grid } from '@chakra-ui/react';
import Header from './Header';
import Toolbar from './Toolbar';
import QueryBuilder from './QueryBuilder';
import ChartRenderer from './ChartRenderer';
import cubejsApi from './cubejsApi';


const theme = extendTheme({
  // Add custom themes here if needed
});

const App = () => {
  const [queryResult, setQueryResult] = useState(null);

  // Function to handle query changes
  const handleQueryChange = async (query) => {
    try {
      const resultSet = await cubejsApi.load(query);
      setQueryResult(resultSet);
    } catch (error) {
      console.error("Error fetching query result:", error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box minWidth="320px">
        <Header />
        <VStack spacing={4}>
          <Toolbar />
          <QueryBuilder onQueryChange={handleQueryChange} />
          {queryResult && (
            <Grid templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={6}>
              
              <ChartRenderer data={queryResult.chartPivot()} />
              
            </Grid>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;
