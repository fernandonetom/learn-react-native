import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.titleBold]}>Meu texto</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  titleBold: {
    fontWeight: 'bold',
  },
});
