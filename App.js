import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import { colors } from './src/config/colors';

import { MainRoutes } from './src/routes/Main.routes';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={colors}>
        <MainRoutes />
      </ThemeProvider>
    </>
  );
}
