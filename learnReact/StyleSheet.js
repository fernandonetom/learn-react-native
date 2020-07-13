import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meu texto</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffee00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
});
