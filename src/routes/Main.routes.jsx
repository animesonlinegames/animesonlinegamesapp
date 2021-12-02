import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './Stack.routes';

export function MainRoutes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
