import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Meu app</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
