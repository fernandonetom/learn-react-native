import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

const Forma1 = () => {
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

function Forma2() {
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
}

class Forma3 extends Component {
  render() {
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
  }
}

export default Forma3;
