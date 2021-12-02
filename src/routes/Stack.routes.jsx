import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Welcome1 } from '../pages/Welcome1';
import { Welcome2 } from '../pages/Welcome2';
import { Welcome3 } from '../pages/Welcome3';
import { Welcome4 } from '../pages/Welcome4';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Welcome1" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Welcome1" component={Welcome1} />
      <Screen name="Welcome2" component={Welcome2} />
      <Screen name="Welcome3" component={Welcome3} />
      <Screen name="Welcome4" component={Welcome4} />
    </Navigator>
  );
}
