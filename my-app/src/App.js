import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import ApiProvider from './apiContext';
import Home from './api/home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApiProvider>
        <Home/>
      </ApiProvider>
    </ChakraProvider>
  );
}

export default App;
