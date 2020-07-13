import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Quadrado = styled.Text`
  background-color: ${(props) => props.cor || '#FFFFFF'};
  width: 50px;
  height: 50px;
`;

export default () => {
  return (
    <Page>
      <Quadrado cor="red" />
      <Quadrado cor="green" />
      <Quadrado cor="blue" />
      <Quadrado cor="pink" />
    </Page>
  );
};
