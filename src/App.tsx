import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './screens/BottomTabs.screen';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
