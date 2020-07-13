import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Texto = styled.Text`
  color: ${(props) => props.cor};
  font-size: 30px;
`;

export default () => {
  return (
    <SafeAreaView>
      <Texto cor="red">Meu texto</Texto>
    </SafeAreaView>
  );
};
