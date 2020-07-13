import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Texto = styled.Text`
  color: #ff0000;
  font-size: 30px;
`;

export default () => {
  return (
    <SafeAreaView>
      <Texto>Meu texto</Texto>
    </SafeAreaView>
  );
};
