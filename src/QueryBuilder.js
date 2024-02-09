
import React, { useState, useEffect } from 'react';
import {
  Box, Button, Select, FormControl, FormLabel, Input, VStack, useToast
} from '@chakra-ui/react';
import cubejsApi from './cubejsApi'; 

const QueryBuilder = ({ onQueryChange }) => {
  const [metaData, setMetaData] = useState({
    measures: [],
    dimensions: [],
    timeDimensions: [],
  });
  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [selectedDimension, setSelectedDimension] = useState('');
  const [selectedTimeDimension, setSelectedTimeDimension] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const toast = useToast();

  useEffect(() => {
    cubejsApi.meta()
      .then(meta => {
        setMetaData({
          measures: meta.measures.map(m => m.name),
          dimensions: meta.dimensions.map(d => d.name),
          timeDimensions: meta.dimensions.filter(d => d.type === 'time').map(d => d.name),
        });
      })
      .catch(error => {
        toast({
          title: 'Error fetching metadata',
          description: error.toString(),
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  }, []);

  const handleSubmit = () => {
    if (!selectedMeasure || !selectedDimension) {
      toast({
        title: 'Validation Error',
        description: 'Please select at least one measure and one dimension.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const query = {
      measures: [selectedMeasure],
      dimensions: [selectedDimension],
      timeDimensions: selectedTimeDimension ? [{
        dimension: selectedTimeDimension,
        
      }] : [],
      filters: selectedFilter ? [{
        dimension: selectedFilter,
        operator: 'equals', 
        values: [filterValue],
      }] : [],
    };

    onQueryChange(query);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <VStack spacing={4}>
        {/* Measure Selection */}
        <FormControl>
          <FormLabel>Measure</FormLabel>
          <Select placeholder="Select measure" value={selectedMeasure} onChange={e => setSelectedMeasure(e.target.value)}>
            {metaData.measures.map(measure => <option key={measure} value={measure}>{measure}</option>)}
          </Select>
        </FormControl>

        {/* Dimension Selection */}
        <FormControl>
          <FormLabel>Dimension</FormLabel>
          <Select placeholder="Select dimension" value={selectedDimension} onChange={e => setSelectedDimension(e.target.value)}>
            {metaData.dimensions.map(dimension => <option key={dimension} value={dimension}>{dimension}</option>)}
          </Select>
        </FormControl>

        {/* Time Dimension Selection */}
        <FormControl>
          <FormLabel>Time Dimension</FormLabel>
          <Select placeholder="Select time dimension" value={selectedTimeDimension} onChange={e => setSelectedTimeDimension(e.target.value)}>
            {metaData.timeDimensions.map(timeDimension => <option key={timeDimension} value={timeDimension}>{timeDimension}</option>)}
          </Select>
        </FormControl>

        {/* Filter Selection */}
        <FormControl>
          <FormLabel>Filter</FormLabel>
          <Select placeholder="Select filter" value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)}>
            {metaData.dimensions.map(dimension => <option key={dimension} value={dimension}>{dimension}</option>)}
          </Select>
          {selectedFilter && (
            <Input placeholder="Filter value" value={filterValue} onChange={e => setFilterValue(e.target.value)} mt={2} />
          )}
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit}>Run Query</Button>
      </VStack>
    </Box>
  );
};

export default QueryBuilder;
