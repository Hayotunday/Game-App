import React from 'react';

import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
