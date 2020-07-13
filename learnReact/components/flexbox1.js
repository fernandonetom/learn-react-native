import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
`;

const Quadrado = styled.Text`
  background-color: ${(props) => props.cor || '#FFFFFF'};
  flex: ${(props) => props.flex || 1};
  height: 50px;
`;

export default () => {
  return (
    <Page>
      <Quadrado cor="red" />
      <Quadrado flex={0.5} cor="green" />
      <Quadrado flex={0.3} cor="blue" />
    </Page>
  );
};
