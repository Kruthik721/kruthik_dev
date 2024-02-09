import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; 


const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
   <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
