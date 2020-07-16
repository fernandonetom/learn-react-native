import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFF00"
        hidden={true}
      />
      <Text style={[styles.title, styles.titleBold]}>Meu texto</Text>
    </SafeAreaView>
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
