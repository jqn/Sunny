/**
 * Sunny
 * https://github.com/jqn/Sunny
 *
 */

import React from 'react';

import RootContainer from './RootContainer';
import {ApplicationContextProvider} from './context/ApplicationContext';

const App = () => {
  return (
    <ApplicationContextProvider>
      <RootContainer />
    </ApplicationContextProvider>
  );
};

export default App;
